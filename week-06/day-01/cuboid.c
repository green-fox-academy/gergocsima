// Write a program that stores 3 sides of a cuboid as variables (doubles)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
#include <stdio.h>
#include <math.h>

int main()
{
    double a = 10;
    double b = 10;
    double c = 10;

    double surface_area = 2 * (a * b + b * c + a * c);
    double volume = a * b * c;
    printf("The surface area of the cuboid is:%.f\nThe volume of the cuboid is:%.f", surface_area, volume);
    return 0;
}