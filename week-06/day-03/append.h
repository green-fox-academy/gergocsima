#include <stdio.h>
#include <stdlib.h>

void appendAFunc(char in[])
{
    int i;
    int j;
    char s2[] = "a";
    i = 0;
    while (in[i] != '\0')
    {
        i++;
    }

    j = 0;
    while (s2[j] != '\0')
    {
        in[i] = s2[j];
        i++;
        j++;
    }
    printf("Concatenated string:%s", in);
}