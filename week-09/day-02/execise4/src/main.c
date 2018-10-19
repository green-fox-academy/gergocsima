#include "stm32f7xx.h"
#include "stm32746g_discovery.h"
#include <string.h>

/* Private typedef -----------------------------------------------------------*/
/* Private define ------------------------------------------------------------*/
/* Private macro -------------------------------------------------------------*/
/* Private variables ---------------------------------------------------------*/
UART_HandleTypeDef uart_handle;
TIM_HandleTypeDef TimeHandle;
GPIO_InitTypeDef led1;
TIM_OC_InitTypeDef sConfig;
GPIO_InitTypeDef conf;
GPIO_InitTypeDef button;
volatile int buttonState = 0;

#undef __GNUC__

// COMMENTED NOT TO USE BECAUSE UART PROBLEM
/* Private function prototypes -----------------------------------------------*/
#define PUTCHAR_PROTOTYPE int __io_putchar(int ch)

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

	/* STM32F7xx HAL library initialization:
	 - Configure the Flash ART accelerator on ITCM interface
	 - Configure the Systick to generate an interrupt each 1 msec
	 - Set NVIC Group Priority to 4
	 - Low Level Initialization
	 */
	HAL_Init();

	/* Configure the System clock to have a frequency of 216 MHz */
	SystemClock_Config();

	/* Add your application code here */

	BSP_LED_Init(LED_GREEN); //on board led
	BSP_PB_Init(BUTTON_WAKEUP, BUTTON_MODE_GPIO); // board button initialized
	__HAL_RCC_GPIOA_CLK_ENABLE() // a ports enabled
	;
	__HAL_RCC_GPIOF_CLK_ENABLE() // f ports enabled
	;

	//Time handler initialization
	__HAL_RCC_TIM2_CLK_ENABLE()
	;
	TimeHandle.Instance = TIM2;
	TimeHandle.Init.Period = 3333;
	TimeHandle.Init.Prescaler = 32400 - 1;
	TimeHandle.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
	TimeHandle.Init.CounterMode = TIM_COUNTERMODE_UP;
	//configure the timer
	HAL_TIM_PWM_Init(&TimeHandle);
	HAL_TIM_PWM_ConfigChannel(&TimeHandle, &sConfig, TIM_CHANNEL_1);
	HAL_TIM_PWM_Start(&TimeHandle, TIM_CHANNEL_1);
	HAL_TIM_Base_Init(&TimeHandle);
	HAL_TIM_Base_Start_IT(&TimeHandle);

	sConfig.OCMode = TIM_OCMODE_PWM1;

	// uart_handle setup
	uart_handle.Init.BaudRate = 115200;
	uart_handle.Init.WordLength = UART_WORDLENGTH_8B;
	uart_handle.Init.StopBits = UART_STOPBITS_1;
	uart_handle.Init.Parity = UART_PARITY_NONE;
	uart_handle.Init.HwFlowCtl = UART_HWCONTROL_NONE;
	uart_handle.Init.Mode = UART_MODE_TX_RX;
	//uart_handel COM port on
	BSP_COM_Init(COM1, &uart_handle);

	// led initialised on selected port
	led1.Pin = GPIO_PIN_15;
	led1.Mode = GPIO_MODE_OUTPUT_PP;
	led1.Pull = GPIO_PULLDOWN;
	led1.Speed = GPIO_SPEED_HIGH;
	HAL_GPIO_Init(GPIOA, &led1);

	//breadboard button
	GPIO_InitTypeDef button;
	button.Pin = GPIO_PIN_0;
	button.Mode = GPIO_MODE_INPUT;
	button.Pull = GPIO_NOPULL;
	button.Speed = GPIO_SPEED_HIGH;
	HAL_GPIO_Init(GPIOA, &button);

	//Configuring the GPIO pin to be input and generates interrupt
	__HAL_RCC_GPIOI_CLK_ENABLE()
	;         // enable the GPIOI clock
	conf.Pin = GPIO_PIN_11;               // the pin is the 11
	conf.Pull = GPIO_NOPULL;
	conf.Speed = GPIO_SPEED_FAST;         // port speed to fast
	/* Here is the trick: our mode is interrupt on rising edge */
	conf.Mode = GPIO_MODE_IT_RISING;
	//Interrupt priorities and enabling interrupt (NVIC)
	/* assign the lowest priority to our interrupt line */
	HAL_NVIC_SetPriority(EXTI0_IRQn, 0x0F, 0x00);

	/* tell the interrupt handling unit to process our interrupts */
	HAL_NVIC_EnableIRQ(EXTI0_IRQn);

	HAL_GPIO_Init(GPIOI, &conf);          // call the HAL init
	HAL_UART_Transmit(&uart_handle, "\nWaiting for push button\n", 24, 1000);

	while (1) {
	buttonState = HAL_GPIO_ReadPin(GPIOA, GPIO_PIN_0);
		if (buttonState ==1) {
			HAL_GPIO_WritePin(GPIOA, GPIO_PIN_15, GPIO_PIN_SET);


		} else{
			HAL_GPIO_WritePin(GPIOA, GPIO_PIN_15, GPIO_PIN_RESET);

		}

	}
	/*HAL_Delay(1000);
	 if ( TIM2->CCR1 >= 10) {
	 TIM2->CCR1 -= 10;
	 } else if (TIM2->CCR1 == 0) {
	 TIM2->CCR1 = 0;
	 }

	 }*/
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
void TIM2_IRQHandler() {
	HAL_TIM_IRQHandler(&TimeHandle);

}

void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *inputParam) {

	if (TIM2->CCR1 <= 90) {
		TIM2->CCR1 += 10;
	} else if ( TIM2->CCR1 == 100) {
		TIM2->CCR1 = 100;
	}

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
