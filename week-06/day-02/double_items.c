#include <stdio.h>
#include <stdlib.h>
void double_items(int *array1, int sizs);

// - Create an array variable named `numList`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Create a function that takes an array as a parameter and,
//   double all the values in the original array
// - Example:
//   int array[] = {0, 32, 5, 71, 91};
//   double_items(array);
//   printf("%d\n", array[1]); // should print out 64

int main()
{
    int numlist[] = {3, 4, 5, 6, 7};
    double_items(numlist, 5);
    printf("Doubled array elements:\n");
    for (int i = 0; i < 5; i++)
    {

        printf("%d\t", numlist[i]);
    }
    return 0;
}

void double_items(int *array, int size)
{

    for (int i = 0; i < size; i++)
    {
        array[i] = array[i] * 2;
    }
}