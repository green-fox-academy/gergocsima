#include "bus.h"
// 1.Create a function for get on the bus. The number of new passengers should be
//  passed as a parameter.
// 2.Create a function for getting off the bus. The number of passengers who are
//  getting off should be passed as a parameter.
// 3.Each time these functions are called, they should print out the current capacity.
//  First the passengers fill up all the seats, and then the standing places when they get on the bus.
//  When they get off the bus, the standing places will be released first.
//  EXAMPLE:
//  An Ikarus 280 has 147 standing places and 36 seats this means it can carry 183 person.
//  - We start with an empty bus. First there are 50 new passengers. So after the get on
//    function called it should inform us:
//    We have 50 passengers. There is 0 empty seats and 133 standing places left.
//  - Then we call the get off function with 20 passengers. This time it should print out something like this:
//    We have 30 passengers. There is 0 seats left and 153 standing places.
//  - If too much passengers wants to get in, our function simply should inform us, that this is too much for this
//    bus and pass without any further action.
// 4.Create a function which takes the whole bus array as a parameter and returns the name of the
//  bus with the largest capacity.

void getOn(int passengers, bus_t *name)
{
    if (passengers > name->capacity)
    {
        printf("This is too much for this bus.\n");
    }
    else if (passengers < name->seatNr)
    {
        name->seatNr = name->seatNr - passengers;
        name->capacity = name->capacity;

        printf("We have %d passengers.There is %d empty seats and %d standing places left.\n", passengers, name->seatNr, name->standPl);
    }
    else
    {
        name->standPl = name->standPl - (passengers - name->seatNr);
        name->seatNr = 0;
        name->capacity = name->capacity;
        printf("We have %d passengers.There is %d empty seats and %d standing places left.\n", passengers, name->seatNr, name->standPl);
    }
}
char *largestCap(bus_t *array, int size, char *name)
{
    int currentCap = array[0].capacity;
    for (int i = 0; i < size; i++)
    {
        if (array[i].capacity > currentCap)
        {
            currentCap = array[i].capacity;
            strcpy(name, array[i].name);
        }
    }
    return name;
}