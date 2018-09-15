#include <stdio.h>
#include <stdlib.h>

// - Create (dynamically) a two dimensional array
//   with the following matrix. Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
// - Print this two dimensional array to the output

int main()
{
	int zero = 0;
	int one = 1;
	int lineNumber = 5;
	for (int i = 0; i < lineNumber; i++)
	{
		for (int j = 0; j < lineNumber; j++)
		{
			if (i == j)
			{
				printf("%d", one);
			}
			else
			{
				printf("%d", zero);
			}
		}
		printf("\n");
	}
	return 0;
}