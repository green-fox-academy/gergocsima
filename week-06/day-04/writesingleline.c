#include <stdio.h>
#include <string.h>

// Open a file called "my-file.txt"
// Write your name in it as a single line

int main()
{
    char filename;
    FILE *fptr;
    char line[1000];
    if ((fptr = fopen(filename, "r")) == NULL)
    {
        printf("Error! opening file");
        // Program exits if file pointer returns NULL.
        exit(1);
    }

    // reads text until newline
    int counter = 0; /*Number of lines*/

    return 0;
}