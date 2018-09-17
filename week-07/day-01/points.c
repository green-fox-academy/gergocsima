#include <stdio.h>
#include <stdlib.h>
#include <math.h>

/*
Create a point struct which has two float variables: x and y
Create a function that constructs a point
It should take it's x and y coordinate as parameter
Create a function that takes 2 points and returns the distance between them
Example:
int main()
{
	point_t p1 = create_point(1, 1);
	point_t p2 = create_point(1, 5.5);
	float dist = distance(p1, p2);
	printf("%f", dist);
	return 0;
}
*/
typedef struct
{
    float x;
    float y;
} points;

points create_points(float a, float b);
int main()
{
    points p1 = create_points(1, 1);
    points p2 = create_points(1, 5.5);
    printf("Coord x:%.2f\n", p2.x);
    printf("Coord y:%.2f\n", p2.y);
    return 0;
}

points create_points(float xC, float yC)
{
    points pointz;
    pointz.x = xC;
    pointz.y = yC;
    return pointz;
}