#include <stdio.h>

// Write a function that takes a car as an argument and prints all it's stats
// If the car is a Tesla it should not print it's gas level
enum car_type
{
    VOLVO,
    TOYOTA,
    LAND_ROVER,
    TESLA
};

struct car
{
    enum car_type type;
    double km;
    double gas;
};

void carData(struct car Any);
int main()
{

    struct car car1;
    car1.type = VOLVO;
    car1.km = 12000.00;
    car1.gas = 200;

    struct car car2;
    car2.type = TOYOTA;
    car2.km = 10454.45;
    car2.gas = 100;

    struct car car3;
    car3.type = LAND_ROVER;
    car3.km = 85000.40;
    car3.gas = 2000;

    struct car car4;
    car4.type = TESLA;
    car4.km = 1000;
    car4.gas = 0;
    carData(car1);
    carData(car4);
    return 0;
}
void carData(struct car Any)
{
    if (Any.type == TESLA)
    {
        printf("The data of the specified car:%.2f km and there is no gas.\n", Any.km);
    }
    else
    {
        printf("The data of the specified car:%.2f km and %.2f gas.\n", Any.km, Any.gas);
    }
}