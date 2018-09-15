#include <stdio.h>
#include <math.h>

int main()
{
    int currentHours = 14;
    int currentMinutes = 34;
    int currentSeconds = 42;
    int secondsDay = 24 * 60 * 60;
    int remainingSeconds = secondsDay - ((currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds);
    printf("The remaining seconds from this day: %d", remainingSeconds);
    // Write a program that prints the remaining seconds (as an integer) from a
    // day if the current time is represented by the variables
}