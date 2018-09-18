#include "car_register.h"

int get_older_cars_than(struct Car *array, int array_length, int age)
{
	int counter = 0;
	int currentYear = 2018;
	for (int i = 0; i < array_length; i++)
	{
		if (currentYear - array[i].year > age)
		{
			counter++;
		}
	}
	return counter;
}
int get_transmission_count(struct Car *array, int array_length, enum Transmission trnsm)
{
	int counter = 0;
	for (int j = 0; j < array_length; j++)
	{
		if (array[j].transm == trnsm)
		{
			counter++;
		}
	}
	return counter;
}