#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
Create a struct that represents a House
It should store:
 - The address of the house
 - The price in EUR
 - The number of rooms
 - The area of the house in square meters
The market price of the houses is 400 EUR / square meters
Create a function that takes a pointer to a house and decides if it's worth to buy
(if the price is lower than the calculated price from it's area)
Create a function that takes an array of houses (and it's length), and counts the
houses that are worth to buy.
*/

struct house
{
    char address[100];
    double price;
    int rooms;
    double area;
};
void worthIt(struct house *);
int numberOfWorth(struct house *list, int numHo);
int main()
{
    struct house house1;
    strcpy(house1.address, "Budapest XII,Fityfiritty utca 10");
    house1.rooms = 4;
    house1.area = 100.50;
    house1.price = 161243.65;
    struct house house2;
    strcpy(house2.address, "Budapest II,Frasz utca 1");
    house2.rooms = 3;
    house2.area = 80.50;
    house2.price = 130243.65;
    struct house house3;
    strcpy(house3.address, "Budapest X,Kakukk utca 16");
    house3.rooms = 2;
    house3.area = 60.50;
    house3.price = 81243.65;
    struct house house4;
    strcpy(house4.address, "Budapest II,Akác utca 5");
    house4.rooms = 5;
    house4.area = 120.50;
    house4.price = 191243.65;
    struct house house5;
    strcpy(house5.address, "Budapest I,Nyul utca 5");
    house5.rooms = 4;
    house5.area = 100.50;
    house5.price = 40043.65;
    worthIt(&house4);

    struct house houseList[] = {house1, house2, house3, house4, house5};
    printf("\nThe number of houses to buy:\n");
    printf("%d", numberOfWorth(houseList, 5));
    return 0;
}

void worthIt(struct house *ptr)
{
    if (ptr->price <= ptr->area * 400)
    {
        printf("Worth to buy this house.");
    }
    else
    {
        printf("Do not worth to buy this house.");
    }
}
int numberOfWorth(struct house *list, int numHouse)
{
    int counter = 0;
    for (int i = 0; i < numHouse; i++)
    {
        if (list[i].price < 400 * list[i].area)
        {
            counter++;
        }
    }
    return counter;
};