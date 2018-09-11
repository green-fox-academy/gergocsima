#include <stdio.h>
#include <stdlib.h>

// with malloc
// please allocate a 10 long array and fill it with 5!! numbers from 0 to 4, then print the whole array
// please delete the array before the program exits

int main()
{
	int *pointer = NULL;
	int array[10] = {0, 1, 2, 3, 4};
	int size = sizeof(array) / sizeof(int);
	int *ptr;
	ptr = (int *)malloc(10 * size);
	for (int i = 0; i < size; i++)
	{
		printf("%d\n", array[i]);
	}

	return 0;
}