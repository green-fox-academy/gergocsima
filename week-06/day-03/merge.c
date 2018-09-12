#include <stdio.h>
#include <stdlib.h>

// please allocate a 10 long array and fill it with even numbers
// please allocate a 10 long array and fill it with odd numbers
// select an array, and push the elements into the another array
// print it the array in descending order
// delete the arrays after you don't use them

int main()
{
    int *pointer = NULL;
    pointer = (int *)calloc(10, sizeof(int));
    int *arrayOdd = (int *)calloc(10, sizeof(int));
    for (int i = 0; i < 10; i++)
    {
        if (i % 2 != 0)
        {
            arrayOdd[i] = i;
        }
        else
        {
            pointer[i] = i;
        }
    }

    for (int j = 0; j < 10; j++)
    {
        if (arrayOdd[j] == 0)
        {
            arrayOdd[j] = pointer[j];
        }
        printf("Merged array from two separate ones:%d\n", arrayOdd[j]);
    }

    free(pointer);
    free(arrayOdd);
    return 0;
}