#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//Print out the addresses with and without pointer
//print out the values with and without pointer

int main()
{
	int number = 2017;
	float Pi = 3.14;
	char letter = 't';
	int *num_p = &number;
	float *Pi_p = &Pi;
	char *let_p = &letter;

	printf("\nPrint addresses with and without pointer:\n%p %p:", num_p, &number);
	printf("\nPrint addresses with and without pointer:\n%p %p:", Pi_p, &Pi);
	printf("\nPrint addresses with and without pointer:\n%p %p:", let_p, &letter);

	return 0;
}