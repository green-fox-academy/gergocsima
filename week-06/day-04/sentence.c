#include <stdio.h>
#include <string.h>
#include <stdlib.h>
// create a function which takes a char array as a parameter,
// and splits a string to words by space
// solve the problem with the proper string.h function
void sentence(char *inpuArray);
int main()
{
    printf("Type in a sentence:\n\n");
    char string[256];
    gets(string);
    sentence(string);

    return (0);
}

void sentence(char *inpuArray)
{
    int counter = 1;
    for (int i = 0; i < strlen(inpuArray); i++)
    {
        if (inpuArray[i] == ' ')
        {
            counter++;
        }
    }
    char **resultArray = (char **)malloc(sizeof(char *) * counter);
    resultArray[0] = strtok(inpuArray, " ");
    for (int i = 1; i < counter; i++)
    {
        resultArray[i] = strtok(NULL, " ");
    }
    for (int i = 0; i < counter; i++)
    {
        printf("%s\n", resultArray[i]);
    }
}