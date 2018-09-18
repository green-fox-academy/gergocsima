#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void bubbleSorter(int *list, int listSize, int x);
//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

int main()
{
    int alist[10] = {7, 1, 6, 33, 10, 20};
    bubbleSorter(alist, 6, 1);
    return 0;
}
void bubbleSorter(int *list, int listSize, int x)
{
    if (x == 0)
    {
        int temp;
        int i, j;
        for (i = 0; i < listSize - 1; i++)
            for (j = 0; j < listSize - i - 1; j++)
                if (list[j] > list[j + 1])
                {
                    temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
        for (int k = 0; k < listSize; k++)
        {
            printf("element %d : %d\n", k, list[k]);
        }
    }
    else
    {
        int temp;
        int i, j;
        for (i = 0; i < listSize - 1; i++)
            for (j = 0; j < listSize - i - 1; j++)
                if (list[j] < list[j + 1])
                {
                    temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
        for (int k = 0; k < listSize; k++)
        {
            printf("element %d : %d\n", k, list[k]);
        }
    }
};