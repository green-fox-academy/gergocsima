#include "pi.h"

// create a function which takes the radius of a circle as a parameter
// and return the area of that cirle
// area = radius * radius * PI

void areaCalc(int radius)
{
    printf("the area of the circle is: %.2f\n", radius * radius * PI);
};

// circumference of a circle
// the radius of the circle should be passed as a parameter
// the function should return the calculated circumference
// circumference = 2 * radius * PI
// this function should be in the same .c and .h files as the one which calculates the area

void circumference(int radius)
{
    float circumference = 2 * radius * PI;
    printf("The calculated circumference of the %d radius circle is: %.2f\n", radius, circumference);
}