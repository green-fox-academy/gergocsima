#include "todoapp.h"
int taskNum;
void startup()
{
	FILE *fptr;
	char filename[100] = "../usage.txt";
	char c;

	fptr = fopen(filename, "r");
	if (fptr == NULL)
	{
		printf("Cannot open file \n");
		exit(0);
	}
	c = fgetc(fptr);
	printf("\n\n");
	while (c != EOF)
	{
		printf("%c", c);
		c = fgetc(fptr);
	}
	fclose(fptr);
	printf("\n\n=============================\n\n");
}
void printTask(List *array)
{
	if (taskNum == 0)
	{
		printf("There is no task for today\nAdd something to your list.\n");
	}
	else
	{
		for (int i = 0; i < taskNum; i++)
		{
			printf("%d - %s\n", i + 1, array[i].task);
		}
	}
}
void addTask(List *array)
{
	printf("Please add me a new task\n");
	int *counter = &taskNum;
	++*counter;
	scanf("%s", array[taskNum - 1].task);
	printf("%d", taskNum);
}
void removeTask(List *array)
{
	int index;
	printf("Please add the number of the task to remove:\n");
	scanf("%d", &index);
	int *counter = &taskNum;
	if (index >= taskNum + 1)
		printf("Deletion not possible.\n");
	else
	{
		for (int i = index - 1; i < taskNum - 1; i++)
		{
			array[i] = array[i + 1];
		}
	}
	--*counter;
}
void completeTask(List *array)
{
	int index = 1;
	printf("Please select a task to complete:\n");
	scanf("%d", &index);
	for (int i = 0; i < taskNum; i++)
	{

		if (index - 1 == i || array[i].status != 0)
		{
			printf("%d - [X] %s\n", i + 1, array[i].task);
			array[i].status++;
		}
		else
		{
			printf("%d - [ ] %s\n", i + 1, array[i].task);
		}
	}
}
void result(List *array)
{
	FILE *fp;
	char output[] = "../output.txt";
	fp = fopen(output, "w");
	for (int i = 0; i < taskNum; i++)
	{
		if (array[i].status > 0)
		{
			fprintf(fp, "[X]\t%s\n", array[i].task);
		}
		else
		{
			fprintf(fp, "[ ]\t%s\n", array[i].task);
		}
	}
	fclose(fp);
}