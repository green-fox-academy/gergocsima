#include <stdio.h>
#include <stdlib.h>

/*
Create a sandwich struct
It should store:
 - name
 - price (float)
 - weight (float)
Create a function which takes two parameters and returns the price of your order.
The parameters should be:
 - a sandwich struct
 - and an integer that represents how many sandwiches you want to order
*/
typedef struct
{
    char *name;
    float price;
    float weight;

} Sandwich;

float priceOfOrder(Sandwich f, int pieces);

int main()
{
    Sandwich fish;
    fish.name = "Fish";
    fish.price = 1540.00;
    fish.weight = 50.00;
    priceOfOrder(fish, 10);
    return 0;
}

float priceOfOrder(Sandwich f, int pieces)
{
    float price = f.price * pieces;
    printf("The price of your order is: %.2f", price);
    return price;
}