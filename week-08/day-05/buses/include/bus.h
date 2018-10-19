#include <stdio.h>
#include <stdlib.h>
#include <string.h>
//  - name of the bus
//     - capacity
//     - number of seats
//     - number of standing places
// NOTE: the capacity = number of seats + number of standing places.
typedef struct Bus
{
    char name[256];
    int seatNr;
    int standPl;
    int capacity;
} bus_t;

void getOn(int passengers, bus_t *name);
char *largestCap(bus_t *array, int size, char *name);
