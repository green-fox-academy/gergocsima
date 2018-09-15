// Write a program that reads a number from the standard input, then draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as the number was

#include <stdio.h>

int main()
{
    printf("Please enter the lines of your triangle:\n");
    int lineNr = 4;
    scanf("%d", &lineNr);
    printf("Here is your triangle:\n");
    printf("****************************************\n\n");
    char star = '*';
    int starCounter = 0;

    for (int i = 0; i < lineNr; i++)
    {
        starCounter = i;
        for (int j = 0; j <= starCounter; j++)
        {
            printf("%c", star);
        }
        printf("\n");
    }
    printf("\n****************************************\n");
    return 0;
}