#include <stdio.h>
#include <string.h>

// create a function which takes a char array as a parameter and
// lists all position where character 'i' is found

char getPos(char *array)
{
    char stringOfIn = 'i';
    int result[200];
    int counter = 0;
    for (int i = 0; i < strlen(array); i++)
    {
        if (array[i] == stringOfIn)
        {
            printf("The index:%d\n", i);
            result[counter] = i;
            counter++;
        }
    }
    for (int j = 0; j < 27; j++)
    {
        if (result[j] != 0)
        {
            printf("%d\n", result[j]);
        }
    }
    return 0;
}
