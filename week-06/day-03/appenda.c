#include <stdio.h>
#include <stdlib.h>
void appendAFunc(char in[]);

int main()
{
    char typo[] = "Chinchill";
    appendAFunc(typo);
    return 0;
}
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
    in[i] = '\0';
    printf("Concatenated string:%s", in);
}
