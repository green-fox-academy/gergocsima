#include <stdio.h>

int main()
{
	double massInKg = 81.2;
	double heightInM = 1.78;
	double bmi = massInKg / (heightInM * heightInM);
	printf("%.2f", bmi); // Print the Body mass index (BMI) based on these values
	return 0;
}