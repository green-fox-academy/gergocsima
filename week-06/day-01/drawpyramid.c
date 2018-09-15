// Write a program that reads a number from the standard input, then draws a
// pyramid like this:
//
//
//1- 123 *
//2- 123***
//3- 12*****
//4- 1*******
//
// The pyramid should have as many lines as the number was

#include <stdio.h>
int main()
{
    printf("Please enter the lines of your pyramid:");
    int lineNr;
    scanf("%d", &lineNr);

    char star = '*';
    char space = ' ';
    printf("********************************************\n\n");
    for (int i = 0; i < lineNr; i++)
    {
        int starNumber = i * 2 + 1;

        for (int l = 0; l < lineNr - i; l++)
        {
            printf("%c", space);
            ;
        }
        for (int i = 0; i < starNumber; i++)
        {
            printf("%c", star);
        }
        printf("\n");
    }
    printf("\n********************************************\n");
    return 0;
}