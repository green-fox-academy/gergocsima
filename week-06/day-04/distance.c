#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// create a function which takes a char array as a parameter and
// returns the distance between the first and last occurance of character 's'

#include <stdio.h>

#include <stdio.h>
#include <string.h>

// create a function which takes a char array as a parameter and
// returns the distance between the first and last occurance of character 's'

int main()
{
    char str[] = "This is a sample string";
    char *first, *last;
    char charToFind;
    int distance;
    printf("The distance of: ");
    scanf("%c", &charToFind);
    int posLast;
    int posFirst;
    for (int i = 0; i < strlen(str); i++)
    {
        if (str[i] == charToFind)
        {
            posLast = i;
        }
    }
    for (int j = strlen(str); j >= 0; j--)
    {
        if (str[j] == charToFind)
        {
            posFirst = j;
        }
    }
    distance = posLast - posFirst;
    printf("The distance of the first and last occurence of %c is :%d\n", charToFind, distance);
    return 0;
}
