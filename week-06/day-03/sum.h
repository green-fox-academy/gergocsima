#include <stdio.h>
#include <stdlib.h>

void sum(int num)
{
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

    printf("The sum of the numbers until the number:%d is %d", num, summ);
}