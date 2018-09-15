// Write a program that asks for two numbers and prints the bigger one
#include <stdio.h>
void biggerOr(int asd, int asd2);
int main()
{
    int num1;
    int num2;
    printf("Please enter two numbers:\n");
    scanf("%d\n%d", &num1, &num2);
    biggerOr(num1, num2);
    return 0;
}

void biggerOr(int numA, int numB)
{

    if (numA > numB)
    {
        printf("The bigger number is:%d\n", numA);
    }
    else
    {
        printf("The bigger number is:%d\n", numB);
    }
}