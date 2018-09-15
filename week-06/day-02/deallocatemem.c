#include <stdio.h>
#include <stdlib.h>

// with malloc
// please allocate a 10 long array and fill it with even numbers then print the whole array
// please deallocate memory without using free

int main()
{
	int *pointer = NULL;
	pointer = (int *)malloc(10 * sizeof(int));
	for (int i = 0; i < 20; i++)
	{
		if (i % 2 != 0)
		{
			pointer[i] = i;
			printf("Element : %d\n", pointer[i]);
		}
	};

	pointer = NULL;
	printf("The pointer memory is deallocated %d\n", pointer);
	return 0;
}