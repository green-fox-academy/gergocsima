#include <stdio.h>
#include <string.h>

void getPos(char *array1);
int main()
{
    char string[55] = "This is a string for testing";
    char *p;
    getPos(string);

    return 0;
}

void getPos(char *array)
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
}
