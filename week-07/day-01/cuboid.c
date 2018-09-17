#include <stdio.h>

// Write a function called "GetSurface" that takes a RectangularCuboid
// and returns it's surface
// Write a function called "GetVolume" that takes a RectangularCuboid
// and returns it's volume

struct rectangular_cuboid
{
    double a;
    double b;
    double c;
};
double GetSurface(struct rectangular_cuboid cubeoidAny);
double GetVolume(struct rectangular_cuboid cubeoidAny2);
int main()
{
    struct rectangular_cuboid Cubik;
    Cubik.a = 10.00;
    Cubik.b = 5.01;
    Cubik.c = 2.0;
    printf("The surface of the cuboid is: %.2f\n", GetSurface(Cubik));
    printf("The volume of the cuboid is: %.2f\n", GetVolume(Cubik));
    return 0;
}
double GetSurface(struct rectangular_cuboid cubeoid)
{
    double surface = ((cubeoid.a * cubeoid.b) + (cubeoid.c + cubeoid.a) + (cubeoid.b * cubeoid.c)) * 2;
    return surface;
}
double GetVolume(struct rectangular_cuboid cubeoid)
{
    double volume = (cubeoid.a * cubeoid.b * cubeoid.c);
    return volume;
}