#include "car_register.h"
// Write the following functions:
//  *  - get_older_cars_than(struct car* array, int array_length, int age)
//  *      - it returns the count of the older cars than "age"
//  *  - get_transmission_count(struct car* array, int array_length, enum transmission trnsm)
//  *      - it returns the count of cars which has "trnsm" transmission
//  */
// int *array = (int *)malloc(sizeof(int));
int main()
{
    struct Car car1;
    strcpy(car1.manufacturer, "Honda");
    car1.price = 1200;
    car1.year = 2013;
    car1.transm = MANUAL;
    struct Car car2;
    strcpy(car2.manufacturer, "Ford");
    car2.price = 2200;
    car2.year = 2016;
    car2.transm = DUAL_CLUTCH;
    struct Car car3;
    strcpy(car3.manufacturer, "Honda");
    car3.price = 4500;
    car3.year = 2018;
    car3.transm = CVT;
    struct Car car4;
    strcpy(car4.manufacturer, "BMW");
    car4.price = 1000;
    car4.year = 2010;
    car4.transm = AUTOMATIC;
    struct Car car5;
    strcpy(car5.manufacturer, "Honda");
    car5.price = 7000;
    car5.year = 2017;
    car5.transm = SEMI_AUTOMATIC;
    struct Car car6;
    strcpy(car6.manufacturer, "VW");
    car6.price = 1200;
    car6.year = 2013;
    car6.transm = DUAL_CLUTCH;
    struct Car garage[] = {car1, car2, car3, car4, car5, car6};
    int year = 2014;
    char trn = "CVT";
    printf("The number of cars in the garage they older then %d are :", year, get_older_cars_than(garage, 6, year));
    printf("The number of cars with %s transmission in the garage: %d", trn, get_transmission_count(garage, 6, trn));
    return 0;
};
