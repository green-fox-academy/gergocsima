#include "stm32f7xx.h"
#include "stm32746g_discovery.h"
#include <string.h>
typedef enum led_state {
	ON, OFF
} led_state_t;
typedef enum timer {
	ONESEC, TWOSEC
} timer_blink_t;
typedef enum active_state {
	START, IDLE
} status_t;
typedef enum program_phase {
	BUTTON_COUNTER, LED, RESTART
} phase_t;
volatile status_t active = IDLE;
volatile phase_t program_phase = BUTTON_COUNTER;
volatile led_state_t led_state = ON;
volatile timer_t timer_blink = ONESEC;
volatile int interrupt_counter = 0;
volatile int button_state = 0;
volatile int timer2_state = 0;
volatile int push_counter = 0;
volatile int *cycle = &push_counter;
volatile uint32_t channel =TIM_CHANNEL_1;
UART_HandleTypeDef uart_handle;
GPIO_InitTypeDef led2;
GPIO_InitTypeDef button;
TIM_HandleTypeDef TimeHandle;
TIM_HandleTypeDef TimeHandle2;
TIM_OC_InitTypeDef sConfig;

//#undef __GNUC__

/* Private function prototypes -----------------------------------------------*/
#ifdef __GNUC__
/* With GCC/RAISONANCE, small printf (option LD Linker->Libraries->Small printf
 set to 'Yes') calls __io_putchar() */
#define PUTCHAR_PROTOTYPE int __io_putchar(int ch)
#else
#define PUTCHAR_PROTOTYPE int fputc(int ch, FILE *f)
#endif /* __GNUC__ */

static void SystemClock_Config(void);
static void Error_Handler(void);
static void MPU_Config(void);
static void CPU_CACHE_Enable(void);

/* Private functions ---------------------------------------------------------*/
/**
 * @brief  Main program
 * @param  None
 * @retval None
 */

void init_uart() {
	/* Add your application code here */
	//Uart initialisation
	uart_handle.Init.BaudRate = 115200;
	uart_handle.Init.WordLength = UART_WORDLENGTH_8B;
	uart_handle.Init.StopBits = UART_STOPBITS_1;
	uart_handle.Init.Parity = UART_PARITY_NONE;
	uart_handle.Init.HwFlowCtl = UART_HWCONTROL_NONE;
	uart_handle.Init.Mode = UART_MODE_TX_RX;
	BSP_COM_Init(COM1, &uart_handle);
}

void button_init() {	// CLOCK ENABLE FOR BUTTON
	__HAL_RCC_GPIOI_CLK_ENABLE()
	;
	//button
	button.Pin = GPIO_PIN_11;
	button.Pull = GPIO_NOPULL;
	button.Speed = GPIO_SPEED_FAST;
	button.Mode = GPIO_MODE_IT_RISING;
	//BUTTON INIT
	HAL_GPIO_Init(GPIOI, &button);
	//EXTI15 SET/IRQ
	HAL_NVIC_SetPriority(EXTI15_10_IRQn, 0x0F, 0x00);
	HAL_NVIC_EnableIRQ(EXTI15_10_IRQn);
}
void tim2_init() {
	//Time handler TIM2 initialisation
	__HAL_RCC_TIM2_CLK_ENABLE()
	;
	HAL_NVIC_SetPriority(TIM2_IRQn, 0x1F, 0x00);
	HAL_NVIC_EnableIRQ(TIM2_IRQn);

	TimeHandle.Instance = TIM2;
	TimeHandle.Init.Period = 16666;
	TimeHandle.Init.Prescaler = 32400;
	TimeHandle.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
	TimeHandle.Init.CounterMode = TIM_COUNTERMODE_UP;
	HAL_TIM_Base_Init(&TimeHandle);

	TIM2->DIER = TIM_DIER_UIE; //help to ignore first timer interrupt
}
void tim3_init() {
	//Time handler TIM3 initialisation
	__HAL_RCC_TIM3_CLK_ENABLE()
	;
	TimeHandle2.Instance = TIM3;
	TimeHandle2.Init.Period = 100;
	TimeHandle2.Init.Prescaler = 1;
	TimeHandle2.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
	TimeHandle2.Init.CounterMode = TIM_COUNTERMODE_UP;
	HAL_TIM_Base_Init(&TimeHandle2);
	//HAL_TIM_Base_Start(&TimeHandle2);
	HAL_TIM_PWM_Init(&TimeHandle2);
	sConfig.OCMode = TIM_OCMODE_PWM1;
	sConfig.Pulse = 10;
	HAL_TIM_PWM_ConfigChannel(&TimeHandle2, &sConfig, TIM_CHANNEL_1);
	HAL_TIM_PWM_Start(&TimeHandle2, TIM_CHANNEL_1);
}
void led_pwm_init() {
	//led pwm initialisation
	led2.Pin = GPIO_PIN_4;
	led2.Mode = GPIO_MODE_AF_PP;
	led2.Pull = GPIO_PULLDOWN;
	led2.Speed = GPIO_SPEED_HIGH;
	led2.Alternate = GPIO_AF2_TIM3;	//check in manual big
	//led alternate mode have to set AF_PP + led.alternate = GPIO_AF1_TIMx

	HAL_GPIO_Init(GPIOB, &led2);
}
int main(void) {
	/* This project template calls firstly two functions in order to configure MPU feature
	 and to enable the CPU Cache, respectively MPU_Config() and CPU_CACHE_Enable().
	 These functions are provided as template implementation that User may integrate
	 in his application, to enhance the performance in case of use of AXI interface
	 with several masters. */

	/* Configure the MPU attributes as Write Through */
	MPU_Config();

	/* Enable the CPU Cache */
	CPU_CACHE_Enable();

	/* STM32F7xx HAL library initialisation:
	 - Configure the Flash ART accelerator on ITCM interface
	 - Configure the Systick to generate an interrupt each 1 msec
	 - Set NVIC Group Priority to 4
	 - Low Level Initialisation
	 */
	HAL_Init();
	__HAL_RCC_GPIOA_CLK_ENABLE()
	;
	__HAL_RCC_GPIOB_CLK_ENABLE()
	;
	/* Configure the System clock to have a frequency of 216 MHz */
	SystemClock_Config();

	BSP_LED_Init(LED_GREEN);
	BSP_PB_Init(BUTTON_WAKEUP, BUTTON_MODE_GPIO);
	init_uart();
	button_init();
	tim2_init();
	tim3_init();
	//led_pwm_init();

	printf(
			"********************** WELCOME THE BUTTON PRESS COUNTER **********************\n");

	while (1) {

	}
}
//INTERRUPT IRQHANDLER

void TIM2_IRQHandler() {
	HAL_TIM_IRQHandler(&TimeHandle);
}
void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim) {
	//printf("timer interrupt active\n");
	if (htim->Instance == TIM2) {
		if (active == IDLE && program_phase == BUTTON_COUNTER) {
			HAL_TIM_Base_Stop_IT(&TimeHandle);
			active = START;
			interrupt_counter = 1;
			HAL_TIM_Base_Start_IT(&TimeHandle);
		} else if (active == START && program_phase == BUTTON_COUNTER) {
			interrupt_counter++;
			printf("The button is pressed and released %d times.\n",
					push_counter);
			HAL_TIM_Base_Stop(&TimeHandle);
			active = IDLE;
			program_phase = LED;
			HAL_NVIC_DisableIRQ(EXTI15_10_IRQn); // disable button interrupt as desired
		}
		if (active == IDLE && program_phase == LED && *cycle != 0) {
			if (timer_blink == ONESEC || led_state == ON) {
				HAL_TIM_Base_DeInit(&TimeHandle);
				TIM2->ARR = 3333;
				led_pwm_init();
				HAL_TIM_Base_Start(&TimeHandle);
				HAL_TIM_PWM_Start(&TimeHandle2,channel);
				led_state = OFF;
				timer_blink = TWOSEC;

			} else if (led_state == OFF && timer_blink == TWOSEC) {
				HAL_TIM_PWM_Stop(&TimeHandle2,channel);
				HAL_TIM_Base_Stop(&TimeHandle);

				HAL_TIM_Base_DeInit(&TimeHandle);
				TIM2->ARR = 6666;
				HAL_TIM_Base_Start(&TimeHandle);
				led_state = ON;
				timer_blink = ONESEC;
				*cycle = *cycle - 1;

			}
		}
		if (*cycle == 0) {
			HAL_TIM_Base_DeInit(&TimeHandle);
		}
	}
}

void EXTI15_10_IRQHandler() {
	HAL_GPIO_EXTI_IRQHandler(button.Pin);
}
void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {
	if (active == IDLE && program_phase == BUTTON_COUNTER
			&& interrupt_counter == 0) {
		__HAL_TIM_SET_COUNTER(&TimeHandle, 0);
		HAL_TIM_Base_Start_IT(&TimeHandle);
		interrupt_counter = 1;

	} else if (active == START && program_phase == BUTTON_COUNTER
			&& interrupt_counter == 1) {
		push_counter++;
		printf("The button is pressed and released.\n");
		HAL_TIM_Base_Stop_IT(&TimeHandle);
		__HAL_TIM_SET_COUNTER(&TimeHandle, 0);
		HAL_TIM_Base_Start_IT(&TimeHandle);
	} else if (active == IDLE && program_phase == LED
			&& interrupt_counter > 1) {
		printf("Disable button interrupt\n");

	}
}

/**
 * @brief  Retargets the C library printf function to the USART.
 * @param  None
 * @retval None
 */
PUTCHAR_PROTOTYPE {
	/* Place your implementation of fputc here */
	/* e.g. write a character to the EVAL_COM1 and Loop until the end of transmission */
	HAL_UART_Transmit(&uart_handle, (uint8_t *) &ch, 1, 0xFFFF);

	return ch;
}

/**
 * @brief  System Clock Configuration
 *         The system Clock is configured as follow :
 *            System Clock source            = PLL (HSE)
 *            SYSCLK(Hz)                     = 216000000
 *            HCLK(Hz)                       = 216000000
 *            AHB Prescaler                  = 1
 *            APB1 Prescaler                 = 4
 *            APB2 Prescaler                 = 2
 *            HSE Frequency(Hz)              = 25000000
 *            PLL_M                          = 25
 *            PLL_N                          = 432
 *            PLL_P                          = 2
 *            PLL_Q                          = 9
 *            VDD(V)                         = 3.3
 *            Main regulator output voltage  = Scale1 mode
 *            Flash Latency(WS)              = 7
 * @param  None
 * @retval None
 */
static void SystemClock_Config(void) {
	RCC_ClkInitTypeDef RCC_ClkInitStruct;
	RCC_OscInitTypeDef RCC_OscInitStruct;

	/* Enable HSE Oscillator and activate PLL with HSE as source */
	RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
	RCC_OscInitStruct.HSEState = RCC_HSE_ON;
	RCC_OscInitStruct.HSIState = RCC_HSI_OFF;
	RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
	RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
	RCC_OscInitStruct.PLL.PLLM = 25;
	RCC_OscInitStruct.PLL.PLLN = 432;
	RCC_OscInitStruct.PLL.PLLP = RCC_PLLP_DIV2;
	RCC_OscInitStruct.PLL.PLLQ = 9;
	if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK) {
		Error_Handler();
	}

	/* activate the OverDrive to reach the 216 Mhz Frequency */
	if (HAL_PWREx_EnableOverDrive() != HAL_OK) {
		Error_Handler();
	}

	/* Select PLL as system clock source and configure the HCLK, PCLK1 and PCLK2
	 clocks dividers */
	RCC_ClkInitStruct.ClockType = (RCC_CLOCKTYPE_SYSCLK | RCC_CLOCKTYPE_HCLK
			| RCC_CLOCKTYPE_PCLK1 | RCC_CLOCKTYPE_PCLK2);
	RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
	RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
	RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV4;
	RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV2;
	if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_7) != HAL_OK) {
		Error_Handler();
	}
}

/**
 * @brief  This function is executed in case of error occurrence.
 * @param  None
 * @retval None
 */
static void Error_Handler(void) {
	/* User may add here some code to deal with this error */
	while (1) {
	}
}

/**
 * @brief  Configure the MPU attributes as Write Through for SRAM1/2.
 * @note   The Base Address is 0x20010000 since this memory interface is the AXI.
 *         The Region Size is 256KB, it is related to SRAM1 and SRAM2  memory size.
 * @param  None
 * @retval None
 */
static void MPU_Config(void) {
	MPU_Region_InitTypeDef MPU_InitStruct;

	/* Disable the MPU */
	HAL_MPU_Disable();

	/* Configure the MPU attributes as WT for SRAM */
	MPU_InitStruct.Enable = MPU_REGION_ENABLE;
	MPU_InitStruct.BaseAddress = 0x20010000;
	MPU_InitStruct.Size = MPU_REGION_SIZE_256KB;
	MPU_InitStruct.AccessPermission = MPU_REGION_FULL_ACCESS;
	MPU_InitStruct.IsBufferable = MPU_ACCESS_NOT_BUFFERABLE;
	MPU_InitStruct.IsCacheable = MPU_ACCESS_CACHEABLE;
	MPU_InitStruct.IsShareable = MPU_ACCESS_SHAREABLE;
	MPU_InitStruct.Number = MPU_REGION_NUMBER0;
	MPU_InitStruct.TypeExtField = MPU_TEX_LEVEL0;
	MPU_InitStruct.SubRegionDisable = 0x00;
	MPU_InitStruct.DisableExec = MPU_INSTRUCTION_ACCESS_ENABLE;

	HAL_MPU_ConfigRegion(&MPU_InitStruct);

	/* Enable the MPU */
	HAL_MPU_Enable(MPU_PRIVILEGED_DEFAULT);
}

/**
 * @brief  CPU L1-Cache enable.
 * @param  None
 * @retval None
 */
static void CPU_CACHE_Enable(void) {
	/* Enable I-Cache */
	SCB_EnableICache();

	/* Enable D-Cache */
	SCB_EnableDCache();
}

#ifdef  USE_FULL_ASSERT

/**
 * @brief  Reports the name of the source file and the source line number
 *         where the assert_param error has occurred.
 * @param  file: pointer to the source file name
 * @param  line: assert_param error line source number
 * @retval None
 */
void assert_failed(uint8_t* file, uint32_t line)
{
	/* User can add his own implementation to report the file name and line number,
	 ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */

	/* Infinite loop */
	while (1)
	{
	}
}
#endif