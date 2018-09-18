#include <string.h>
#include <stdio.h>

typedef enum Transmission
{
    MANUAL,
    AUTOMATIC,
    CVT,
    SEMI_AUTOMATIC,
    DUAL_CLUTCH,
} Transmission;

struct Car
{
    char manufacturer[256];
    double price;
    int year;
    Transmission transm;
};
int get_older_cars_than(struct Car *array, int array_length, int age);
int get_transmission_count(struct Car *array, int array_length, enum Transmission trnsm);