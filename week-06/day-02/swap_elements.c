#include <stdio.h>
#include <stdlib.h>
void swap(char **arr);
// - Create an array variable named `abc`
//   with the following content: `["first", "second", "third"]`
// - Swap the first and the third element of `abc` by using a function
// - That function should take an array as a parameter and return the correct array

int main()
{
    char *abc[] = {"first", "second", "third"};
    swap(abc);
    return 0;
}

void swap(char **array)
{
    char *newArr[4];
    char temp;
    for (int i = 3 - 1; i >= 0; i--)
    {
        for (int j = 0; j <= 3; j++)
            newArr[j] = array[i];
        printf("%s\n", newArr[i]);
    }
}