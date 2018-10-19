#include "bus.h"

/*
Create a bus structure where you store:
    - name of the bus
    - capacity
    - number of seats
    - number of standing places
NOTE: the capacity = number of seats + number of standing places.
Store different type of buses in main() in an array.
1.Create a function for get on the bus. The number of new passengers should be
 passed as a parameter.
2.Create a function for getting off the bus. The number of passengers who are
 getting off should be passed as a parameter.
3.Each time these functions are called, they should print out the current capacity.
 First the passengers fill up all the seats, and then the standing places when they get on the bus.
 When they get off the bus, the standing places will be released first.
 EXAMPLE:
 An Ikarus 280 has 147 standing places and 36 seats this means it can carry 183 person.
 - We start with an empty bus. First there are 50 new passengers. So after the get on
   function called it should inform us:
   We have 50 passengers. There is 0 empty seats and 133 standing places left.
 - Then we call the get off function with 20 passengers. This time it should print out something like this:
   We have 30 passengers. There is 0 seats left and 153 standing places.
 - If too much passengers wants to get in, our function simply should inform us, that this is too much for this
   bus and pass without any further action.
4.Create a function which takes the whole bus array as a parameter and returns the name of the
 bus with the largest capacity.
*/

int main()
{
	struct Bus *bus1 = malloc(sizeof(bus1));
	strcpy(bus1->name, "Ikarus 280_1");
	bus1->seatNr = 36;
	bus1->standPl = 147;
	bus1->capacity = bus1->standPl + bus1->seatNr;

	struct Bus *bus2 = malloc(sizeof(bus2));
	strcpy(bus2->name, "Ikarus 280_2");
	bus2->seatNr = 50;
	bus2->standPl = 147;
	bus2->capacity = (*bus2).standPl + (*bus2).seatNr;

	struct Bus *bus3 = malloc(sizeof(bus3));
	strcpy(bus3->name, "Ikarus 280_3");
	bus3->seatNr = 60;
	bus3->standPl = 147;
	bus3->capacity = (*bus3).standPl + (*bus3).seatNr;

	struct Bus *bus4 = malloc(sizeof(bus4));
	strcpy((*bus4).name, "Ikarus 280_4");
	bus4->seatNr = 36;
	bus4->standPl = 147;
	bus4->capacity = (*bus4).standPl + (*bus4).seatNr;

	bus_t buses[] = {*bus1, *bus2, *bus3, *bus4};
	int size = sizeof(buses) / sizeof(buses[0]);
	char busName[265];

	getOn(50, bus1);
	getOn(20, bus1);
	printf("The largest capacity among the current buses:%s\n", largestCap(buses, size, busName));
	return 0;
}