#include <stdio.h>

// Write a program that opens a file called "my-file.txt", then prints
// each of lines form the file.
// You have to create the file, you can use C-programming but it is not mandatory

int main()
{
    FILE *fptr;
    fptr = fopen("my-file.txt", "w");

    fprintf(fptr, "This is a testing file for file writing and reading in c.\n");
    fclose(fptr);
}