// Write a program that asks for 5 integers in a row,
// then it should print the sum and the average of these numbers like:
//
// Sum: 22, Average: 4.4
#include <stdio.h>
int main()
{
    int num;
    int sum = 0;
    int avg;
    for (int i = 1; i < 6; i++)
    {
        printf("Enter a number %d:\n", i);
        scanf("%d", &num);
        sum += num;
    }
    avg = sum / 5;
    printf("The sum of the numbers you entered is:%d\nThe avarage of the numbers you enetered is:%d\n", sum, avg);
}