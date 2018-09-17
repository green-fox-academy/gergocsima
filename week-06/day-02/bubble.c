#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
void bubbleSorter(int *nums, int size, bool state);
//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

int main()
{
    printf("Please enter the size of your array:\n");
    int size;
    scanf("%d", &size);
    printf("Please enter the %d numbers:\n", size);
    int *arr;
    for (int z = 0; z < size; z++)
    {
        printf("number %d: ", z);
        arr[1] = scanf("%d", &z);
    }
    bubbleSorter(arr, size, true);
    return 0;
}

void bubbleSorter(int *nums, int size, bool state)
{
    int numSize = size;
    int temp;
    for (int i = 0; i < numSize; ++i)
    {

        for (int j = i + 1; j < numSize; ++j)
        {

            if (nums[i] > nums[j])
            {

                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }

    if (state == true)
    {
        for (int i = 0; i < size; i++)
        {
            printf("%d\t", nums[i]);
        }
    }
    else
    {
        for (int j = size; j > 0; j--)
        {
            printf("%d\t", nums[j]);
        }
    }
}