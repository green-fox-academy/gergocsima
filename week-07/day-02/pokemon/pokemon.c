#include "pokemon.h"
/*
 * The "pokemon"-s are stored in an array.
 *
 
 * 2) Get type count
 *      - parameters:
 *          - array
 *          - array length
 *          - type
 *      - it returns the count of pokemons which are "type"
 * 3) Get strongest type
 *      - parameters:
 *          - array
 *          - array length
 *          - strength
 *      - it returns the type of the strongest pokemon
 * 4) Get maximal strength of a type
 *      - parameters:
 *          - array
 *          - array length
 *          - type
 *      - it returns the highest strength among the "type" type pokemons
 *
 * Don't forget to handle invalid inputs (NULL pointers, invalid values etc.)
 */

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
