#include <string.h>
#include <stdio.h>

typedef struct Digimon
{
    char name[128];
    int age;
    int health;
    char tamerName[256];
    digi_t level;
} digim_t;

typedef enum digivolution
{
    BABY,
    IN_TRAINING,
    ROOKIE,
    CHAMPION,
    ULTIMATE,
    MEGA
} digi_t;
