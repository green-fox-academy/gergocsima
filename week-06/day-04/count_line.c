// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int lineCounter(char *fName);
int main()
{
    printf("Please enter the name of the target file for line counting:\n");
    char *fileName;
    scanf("%s", &fileName);
    lineCounter(fileName);
}
int lineCounter(char *fileName)
{
    FILE *fptr;
    char line[1000];
    if ((fptr = fopen(fileName, "r")) == NULL)
    {
        printf("Error! opening file");
        exit(1);
    }
    int counter = 0;
    while (fgets(line, sizeof(line), fptr) != NULL)
    {
        counter++;
    }

    printf("Number of lines in the file is %i", counter);

    fclose(fptr);
    return 0;
}