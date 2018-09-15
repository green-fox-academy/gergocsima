// Write a program that reads a number from the standard input,
// Then prints "Odd" if the number is odd, or "Even" if it is even.
#include <stdio.h>
int main()
{
    printf("Please eneter a number\n");
    int num;
    scanf("%d", &num);

    if (num % 2 != 0)
    {
        printf("The %d number is Odd\n", num);
    }
    else
    {
        printf("the %d number is Even\n", num);
    }
    return 0;
}