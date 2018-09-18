#include <string.h>
#include <stdio.h>

typedef enum PokemonType
{

    NORMAL,
    FIRE,
    WATER,
    GRASS,
    ELECTRIC,
    ICE,
    FIGHTING,
    POISION,
    GROUND,
    FLYING,
    PSYCHIC,
    BUG,
    ROCK,
    GHOST,
    DRAGON,
    DARK,
    STEEL,
    FAIRY,
} pok_t;

typedef struct
{
    char name[256];
    int age;
    double strength;
    double speed;
    pok_t type;

} Pokemon;
int fasterPok(Pokemon *array, int array_length, double speed);
char *strongestType(Pokemon *array, int array_length, float strength);
int typeCounter(Pokemon *array, int array_length, enum PokemonType pok_t);
float highestType(Pokemon *array, int array_length, enum PokemonType pok_t);
