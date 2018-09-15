#include <stdio.h>
#include <string.h>

// create a function which takes a char array as a parameter,
// and splits a string to words by space
// solve the problem with the proper string.h function

void sentence(char *array)

{
    char *resultArray[100];
    int size = sizeof(array) / sizeof(int);
    resultArray[0] = strtok(array, " ");
    for (int i = 0; i < size; i++)
    {
        resultArray[i] = strtok(NULL, " ");
        printf("%c:", array[i]);
    }
}