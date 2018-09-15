#include <stdio.h>
double milesCalculator(int any);

int main()
{
    // Write a program that asks for an integer that is a distance in kilometers,
    // then it converts that value to miles and prints it,1 kilometer is equal to 0.62137119 mile
    printf("Please enter the kilometers:");
    int km;
    scanf("%d", &km);
    milesCalculator(km);
}
double milesCalculator(int km)
{
    double kilometers;
    double mile = 0.62137119;
    double miles = km * mile;
    printf("%d kilometers equals %.2f miles\n", km, miles);
    return miles;
}