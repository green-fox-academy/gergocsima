#include <stdio.h>
void float *orderprice(struct Sandwich mySandwich, int pieces);
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
	char name;
	float price;
	float weight;

} Sandwich;

void float *orderprice(struct Sandwich mySandwich, int pieces)
{
	printf("my sandwich order price is %d.", mySandwich.price * pieces);
}
int main()
{
	Sandwich mySandwich;
	mySandwich.price = 1200;
	int pieces = 3;
	{

		return 0;
	}