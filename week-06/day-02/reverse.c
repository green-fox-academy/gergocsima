#include <stdio.h>
#include <stdlib.h>

// - Create an array variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// - Print the elements of the reversed `aj`

int main()
{
    int aj[] = {3, 4, 5, 6, 7};
    int size = sizeof(aj) / sizeof(int);
    int counter = 0;
    int *tempArr = (int *)malloc(size);
    for (int i = size - 1; i >= 0; i--)
    {
        tempArr[counter] = aj[i];
        counter++;
    }
    for (int i = 0; i < size; i++)
    {
        printf("%d\n", tempArr[i]);
    }

    return 0;
}