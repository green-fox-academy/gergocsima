#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void isAnagram(char *inX, char *inY);
int main()
{
    printf("Please enter the two words to check if they anagrams or not:\n");
    char in1;
    char in2;
    scanf("%s\n", &in1);
    scanf("%s", &in2);
    isAnagram(&in1, &in2);
}
void isAnagram(char *input1, char *input2)
{
    int counter = 0;
    for (int i = 0; i < strlen(input1); i++)
    {
        for (int j = 0; j < strlen(input2); j++)
        {
            if (input1[i] == input2[j])
            {
                counter++;
            }
        }
    }
    if (counter == strlen(input1))
    {
        printf("True\n");
    }
    else
    {
        printf("False\n");
    }
}
