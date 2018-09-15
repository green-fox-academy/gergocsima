#include <stdio.h>
#include <string.h>

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is "apple" and the number is 5, than it should write 5 lines
// to the file and each line should be "apple"

void *multiplelines(char *path, char *word, int number)
{
    FILE *fptr;
    fptr = fopen(path, "w");
    for (int i = 0; i < number; i++)
    {
        puts(word);
        fprintf(fptr, "%s\n", word);
    }
    fclose(fptr);
    return 0;
}