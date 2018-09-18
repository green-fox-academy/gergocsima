#include <stdio.h>
#include <stdlib.h>

// create two functions:
// first should create an array dynamically (the size should be a user input)
// second sould fill the array with random numbers
void createArray(int size);
void fillArray(int *array, int s);
int main()
{
    createArray(10);
    int *arrayTest[10];
    fillArray(arrayTest, 12);
    return 0;
}
void createArray(int size)
{
    int *array = (int *)malloc(size);
    for (int i = 0; i < size; i++)
    {
        printf("Array %d element: %d\n", i, array[0]);
    }
    free(array);
}
void fillArray(int *array, int size)
{

    for (int i = 0; i < size; i++)
    {
        array[i] = rand() % 100 + 1;
    }
    for (int k = 0; k < size; k++)
    {
        printf("Elem number %d : %d\n", k, array[k]);
    }
};