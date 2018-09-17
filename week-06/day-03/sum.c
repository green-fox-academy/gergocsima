#include <stdio.h>
#include <stdlib.h>
void sum(int anyNum);

// - Write a function called `sum` that sum all the numbers
//   until the given parameter and returns with an integer

int main()
{
    int number = 99;
    sum(number);
    return 0;
}

void sum(int num)
{
    printf("Please enter a number till calculate the sum of the numbers:\n");
    scanf("%d", &num);
    int temp = num;
    int i;
    i = 0;
    int summ;
    while (i <= num)
    {
        summ += i;
        i++;
    }

    printf("The sum of the numbers until the number %d is: %d\n", num, summ);
}