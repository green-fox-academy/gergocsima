#include <stdio.h>
#include <stdlib.h>
int sumElements(int *arr, int si);
// - Create an array variable named `ai`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Create a function that takes an array as a paramater and returns the sum of the
//   elemnets in that array

int main()
{
    int ai[] = {3, 4, 5, 6, 7, 1, 1, 1, 1};
    int size = sizeof(ai) / sizeof(int);
    sumElements(ai, size);
    return 0;
}

int sumElements(int *array, int size)
{
    int sum = 0;

    for (int i = 0; i < size; i++)
    {
        sum += array[i];
    }
    printf("%d", sum);
    return 0;
}