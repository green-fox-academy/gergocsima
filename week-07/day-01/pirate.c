#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
Create a struct that represents a pirate
It should store:
 - name
 - an int value which tells us if he/she has a wooden leg? 
 - gold count
Create a function that takes an array of pirates (and it's length) then returns the sum of the golds of all pirates
Create a function that takes an array of pirates (and it's length) then returns the average of the gold / pirate
Create a function that takes an array of pirates (and it's length) then returns the name of the
richest that has wooden leg
*/

struct Pirate
{
    char name[256];
    int has_wooden_leg;
    short int gold_count;
};
int sumOfGold(struct Pirate *list, int listLength);
int avgOfGold(struct Pirate *list, int listLength);
char *richestWood(struct Pirate *list, int listLength, char *name_p);
int main()
{
    struct Pirate pirate1;
    strcpy(pirate1.name, "Jack");
    pirate1.has_wooden_leg = 1;
    pirate1.gold_count = 100;
    struct Pirate pirate2;
    strcpy(pirate1.name, "Joe");
    pirate1.has_wooden_leg = 0;
    pirate1.gold_count = 1000;
    struct Pirate pirate3;
    strcpy(pirate1.name, "Rob");
    pirate1.has_wooden_leg = 1;
    pirate1.gold_count = 500;
    struct Pirate pirate4;
    strcpy(pirate1.name, "Bill");
    pirate1.has_wooden_leg = 0;
    pirate1.gold_count = 800;
    struct Pirate pirate5;
    strcpy(pirate1.name, "Joco");
    pirate1.has_wooden_leg = 1;
    pirate1.gold_count = 10000;
    struct Pirate ship[] = {pirate1, pirate2, pirate3, pirate4, pirate5};
    char *name_p = (char *)malloc(100);
    printf("The sum of Gold is: %d \n", sumOfGold(ship, 5));
    printf("The avarage Gold: %d\n", avgOfGold(ship, 5));
    printf("The richest wooden leg pirate is:%s\n", richestWood(ship, 5, "Jack"));
    return 0;
}

int sumOfGold(struct Pirate *list, int listLength)
{
    int sum = 0;
    for (int i = 0; i < listLength; i++)
    {
        sum += list[i].gold_count;
    }
    return sum;
}
int avgOfGold(struct Pirate *list, int listLength)
{
    int sum = 0;
    for (int i = 0; i < listLength; i++)
    {
        sum += list[i].gold_count;
    }
    return sum / listLength;
}
char *richestWood(struct Pirate *list, int listLength, char *name_p)
{
    for (int j = 0; j < listLength; j++)
    {
        name_p = list[0].name;
        int toCompare = list[0].gold_count;
        if (list[j].has_wooden_leg == 1 && list[j].gold_count > toCompare)
        {
            name_p = list[j].name;
            toCompare = list[j].gold_count;
        }
    }
    return name_p;
}