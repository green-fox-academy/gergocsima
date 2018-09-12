#include <stdio.h>
#include <stdlib.h>

// with malloc
// please allocate a 10 long array and fill it with even numbers then print the whole array
// please deallocate memory without using free

int main()
{
	int *pointer = NULL;
	int pointer = (int *)malloc(10 * sizeof(int));
	for (int i = 0; i < 10; i++)
	{
		if (pointer[i] % 2 != 0)
		{
			pointer[i] = i;
		}
		printf("Element : %d\n", pointer[i]);
	};

	return 0;
}