#include <string.h>
#include <stdio.h>

typedef enum digimonLevel
{
    BABY,
    IN_TRAINING,
    ROOKIE,
    CHAMPION,
    ULTIMATE,
    MEGA
} digi_t;
typedef struct Digimon
{
    char name[128];
    int age;
    int health;
    char tamerName[256];
    digi_t level;
} digim_t;

int minimumHealth(digim_t *array, int array_length);
int digivolLevelCount(digim_t *array, int array_length, enum digimonLevel digi_t);
int sameTamer(digim_t *array, int array_length, char *tamer);
int avarageHealth(digim_t *array, int array_length, char *tamer);