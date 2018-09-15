#include <stdio.h>
// Write a program that asks for two integers
// The first represents the number of chickens the farmer has
// The second represents the number of pigs owned by the farmer
// It should print how many legs all the animals have
void legNumber(int ch, int pi);
int main()
{
    printf("Please add the number of the chickens:\n");
    int chicks;
    scanf("%d", &chicks);
    printf("Please add the number of the pigs:\n");
    int piglets;
    scanf("%d", &piglets);
    legNumber(chicks, piglets);
    return 0;
}

void legNumber(int chickens, int pigs)
{
    int chickeLegs = chickens * 2;
    int pigLegs = pigs * 4;
    int legCalculator = chickeLegs + pigLegs;
    printf("On this farm the chickens and pigs together have %d legs.\n", legCalculator);
}