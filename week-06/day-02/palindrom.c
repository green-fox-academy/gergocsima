#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char createPalindrom(char *input1);

int main()
{
    printf("Please enter a word for palindrom creator:\n");
    char input;
    scanf("%s", &input);
    createPalindrom(&input);
}
char createPalindrom(char *input)
{
    int sizeInput = strlen(input);
    char revInput[sizeInput];
    int sizeOutput = (sizeInput * 2) - 1;
    char output[sizeOutput];

    int j = 0;
    int h = 0;
    for (int i = (strlen(input) - 1); i >= 0; i--)
    {
        revInput[j] = input[i];
        j++;
    }
    for (int m = 0; m < sizeOutput + 1; m++)
    {
        if (m < sizeInput)
        {
            output[m] = input[m];
        }
        else
        {
            if (m < sizeOutput)
            {

                output[m] = revInput[h];
                h++;
            }
            else
            {
                output[m] = '\0';
            }
        }
    }
    printf("%s\n", output);
    return 0;
}