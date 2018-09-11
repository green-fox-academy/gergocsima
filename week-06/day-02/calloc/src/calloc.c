#include <stdio.h>
#include <stdlib.h>

// with calloc
// please allocate a 10 long array and fill it with 5!! numbers from 0 to 4, then print the whole array
// please delete the array before the program exits
// what's the difference between this and the previous excersice?

int main()
{
	int *pointer = NULL;
	int array1[10] = {0, 1, 2, 3, 4};
	int *pntr;
	pntr = (int *)calloc(10, sizeof(array1) / sizeof(int));
	printf("Calloc Print array:\n");
	for (int i = 0; i < sizeof(array1) / sizeof(int); i++)
	{
		printf("%d\n\t", array1[i]);
	}
	free(pntr);
	return 0;
}