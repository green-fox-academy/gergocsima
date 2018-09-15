// Write a program that reads a number form the standard input,
// If the number is zero or smaller it should print: Not enough
// If the number is one it should print: One
// If the number is two it should print: Two
// If the number is more than two it should print: A lot
#include <stdio.h>
int oneTwoLot(int n);
int main()
{
    printf("Please enter a number:\n");
    int num;
    scanf("%d", &num);
    oneTwoLot(num);
}
int oneTwoLot(int num)
{
    if (num <= 0)
    {
        printf("Not enough\n");
    }
    else if (num == 1)
    {
        printf("One\n");
    }
    else if (num == 2)
    {
        printf("Two\n");
    }
    else
    {
        printf("A lot\n");
    }

    return 0;
}