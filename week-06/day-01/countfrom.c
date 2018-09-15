// Create a program that asks for two numbers
// If the second number is not bigger than the first one it should print:
// "The second number should be bigger"
//
// If it is bigger it should count from the first number to the second by one
//
// example:
//
// first number: 3, second number: 6, should print:
//
// 3
// 4
// 5

#include <stdio.h>

int main()
{
    printf("Plese eneter two numbers:\n");
    int num1;
    int num2;
    scanf("%d%d", &num1, &num2);
    printf("The first number: %d, The second number: %d\n", num1, num2);
    if (num2 < num1)
    {
        printf("The second number should be bigger\n");
    }
    else
    {
        for (int i = num1; i < num2; i++)
        {
            printf("%d\n", i);
        }
    }
    return 0;
}