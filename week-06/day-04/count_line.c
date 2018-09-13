#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file

int main()
{
    FILE *fptr;
    char line[1000];
    if ((fptr = fopen("my-file.txt", "r")) == NULL)
    {
        printf("Error! opening file");
        // Program exits if file pointer returns NULL.
        exit(1);
    }

    // reads text until newline
    int counter = 0; /*Number of lines*/

    while (fgets(line, sizeof(line), fptr) != NULL)
    {
        counter++;
    }

    printf("Number of lines in the file is %i", counter);

    fclose(fptr);
    return 0;
}