#include "pokemon.h"

int fasterPok(Pokemon *array, int array_length, double speed)
{
    int counter = 0;
    if (array == NULL)
    {
        printf("The pokemon list you checked is empty");
    }
    else if (speed < 0.0 || speed > 10.0)
    {
        printf("The speed parameter you entered is invalid, try again, the range is between 0.0-10.0\n");
    }
    else
    {
        for (int i = 0; i < array_length; i++)
        {
            if (array[i].speed > speed)
            {
                counter++;
            }
        }
    }
    return counter;
}
int typeCounter(Pokemon *array, int array_length, enum PokemonType pok_t)
{
    int counter = 0;
    if (array == NULL)
    {
        printf("The pokemon list you checked is empty");
    }
    else
    {
        for (int i = 0; i < array_length; i++)
        {
            if (array[i].type == pok_t)
            {
                counter++;
            }
        }
    }
    return counter;
}

char *strongestType(Pokemon *array, int array_length, float strength)
{
    float counter = array[0].strength;
    int strongest = array[0].type;
    char *type[] = {"NORMAL", "FIRE", "WATER", "GRASS", "ELECTRIC", "ICE", "FIGHTING", "POISION", "GROUND", "FLYING", "PSYCHIC", "BUG", "ROCK", "GHOST", "DRAGON", "DARK", "STEEL", "FAIRY"};

    if (array == NULL)
    {
        printf("The pokemon list you checked is empty");
    }
    else if (strength < 0.0 || strength > 10.0)
    {
        printf("The strength parameter you entered is invalid, try again, the range is between 0.0-10.0\n");
    }
    else
    {
        for (int i = 0; i < array_length; i++)
        {
            if (array[i].strength > counter)
            {
                counter = array[i].strength;
                strongest = array[i].type;
            }
        }
    }
    return type[strongest];
}

float highestType(Pokemon *array, int array_length, enum PokemonType pok_t)
{
    float strength = array[0].strength;
    for (int i = 0; i < array_length; i++)
    {
        if (array[i].type == pok_t && array[i].strength >= strength)
        {
            strength = array[i].strength;
        }
    }
    return strength;
}
