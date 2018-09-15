#include <stdio.h>
#include <string.h>
// create a function which takes a char array as a parameter and
// returns the distance between the first and last occurance of character 's'
int distance(char *array)
{
    char letter = 's';

    int size = 0;
    int offset = 0;
    while (*(array + offset) != '\0')
    {
        size++;
        offset++;
    }
    int distance;
    int first;
    int last;
    int counter = 0;

    printf("size:%d count:%d", size);
    return 0;
}