#include <stdio.h>

// Write a program that opens a file called "my-file.txt", then prints
// each of lines form the file.
// You have to create the file, you can use C-programming but it is not mandatory

int main()
{
    FILE *fptr;
    fptr = fopen("my-file.txt", "w");

    fprintf(fptr, "This is a testing file for file writing and reading in c second.\n Test second line\n");
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

    printf("Data from the file, just first line:\n%s\n", c);
    fclose(fptr);

    char s[1000];
    FILE *fptr3;
    char stringall;
    fptr3 = fopen("my-file.txt", "r");
    stringall = fgetc(fptr3);
    printf("The all sentences printed together:\n\n");
    while (stringall != EOF)
    {
        printf("%c", stringall);
        stringall = fgetc(fptr3);
    }
    printf("\n\n");
    fclose(fptr3);
    return 0;
}