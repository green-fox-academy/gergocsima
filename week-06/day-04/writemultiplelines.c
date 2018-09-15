#include <stdio.h>
#include <string.h>

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is "apple" and the number is 5, than it should write 5 lines
// to the file and each line should be "apple"

int multiplelines(char *path, char *word, int *number)
{
    FILE *fptr;
    if ((fptr = fopen(path, "a")) == NULL)
    {
        printf("Error! opening file");
        // Program exits if file pointer returns NULL.
        exit(1);
    }
    for (int i = 0; i <= number; i++)
    {
        puts(word);
        fprintf(fptr, "%d\n");
    }

    return 0;
}