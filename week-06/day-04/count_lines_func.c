#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int lineCounter(char *fileNameAny);
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file

int main()
{
    printf("%d", lineCounter("my-file_2nd.txt"));
    return 0;
}
int lineCounter(char *fileName)
{
    FILE *fptr;
    fptr = fopen(fileName, "r");
    char line[1000];
    char c;
    int numberOfLines = 0;
    if ((fptr = fopen(fileName, "r")) == NULL)
    {
        printf("%d", numberOfLines);
        exit(1);
    }
    while (fgets(line, sizeof(line), fptr) != NULL)
    {

        numberOfLines = numberOfLines + 1;
    }
    fclose(fptr);
    return numberOfLines;
}
