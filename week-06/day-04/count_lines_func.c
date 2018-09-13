#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file

int main()
{
    char filename;
    FILE *fptr = fopen("my-file_2nd.txt", "a");
    fprintf(fptr, "%s\n", "Petrophyllum altum");
    fclose(fptr);
    return 0;
}