#include <stdio.h>

// Write a program that opens a file called "my-file.txt", then prints
// each of lines form the file.
// You have to create the file, you can use C-programming but it is not mandatory

int main()
{
    FILE *fptr;
    fptr = fopen("my-file.txt", "w");

    fprintf(fptr, "This is a testing file for file writing and reading in c second.\n");
    fclose(fptr);
    char c[1000];
    FILE *fptr2;

    if ((fptr2 = fopen("my-file.txt", "r")) == NULL)
    {
        printf("Error! opening file");
        // Program exits if file pointer returns NULL.
        exit(1);
    }

    // reads text until newline
    fscanf(fptr, "%[^\n]", c);

    printf("Data from the file:\n%s", c);
    fclose(fptr);

    return 0;
}