#include <stdio.h>
#include <stdlib.h>
void coorGen(int pairOf);

// Create a struct to store coordinates (for example: int x and int y)
// Create an array which can store coordinates, do not create multidimensonal arrays here
// Fill up the coordinates in the array with random number.

typedef struct
{
    int x;
    int y;
} coordinates;
int main()
{
    coordinates myCoord;
    myCoord.x = rand();
    myCoord.y = rand();
    coordinates coord[2];
    coord[0].x = myCoord.x;
    coord[1].y = myCoord.y;
    //generate just one random coordinate pair in the array, but could be scalable if limiter increses
    for (int i = 0; i < 1; i++)
    {
        printf("The x coordinate is: %d\n", coord[i].x);
        printf("The y coordinate is: %d\n", coord[i + 1].y);
    };
    printf("Coordinate size:%lu", sizeof(coord) / sizeof(coord[0]));
    coorGen(3);
    return 0;
}
void coorGen(int pairOf)
{
    coordinates newCoord;

    coordinates coord[pairOf];

    for (int i = 0; i < pairOf; i++)
    {
        newCoord.x = rand();
        newCoord.y = rand();
        coord[i].x = newCoord.x;
        coord[i + 1].y = newCoord.y;
        printf("\n************************************************\n");
        printf("The %d pair of generated coodinates are:\n", i + 1);
        printf("The x coordinate is: %d\n", coord[i].x);
        printf("The y coordinate is: %d\n", coord[i + 1].y);
    }
}