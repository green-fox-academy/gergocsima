#include <stdio.h>
#include <stdlib.h>

// with malloc
// please allocate a 10 long array and fill it with 5!! numbers from 0 to 4, then print the whole array
// please delete the array before the program exits

int main()
{
	int *pointer = NULL;
	int size = sizeof(pointer) / sizeof(int);
	pointer = (int *)malloc(5 * size);
	for (int i = 0; i < 5; i++)
	{
		pointer[i] = i;
		printf("%d\n", pointer[i]);
	}

	return 0;
}