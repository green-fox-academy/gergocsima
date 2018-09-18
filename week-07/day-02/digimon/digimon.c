#include "digimon.h"

/* 
 * 4) Get average health of the same tamer
 *      - parameters:
 *          - array
 *          - array length
 *          - tamer name
 *      - it returns the average health of the digimons which have the same tamer as "tamer name"
 *
 * Don't forget to handle invalid inputs (NULL pointers, invalid values etc.)
 */
int minimumHealth(digim_t *array, int array_length)
{
    int current = 100;
    for (int i = 0; i < array_length; i++)
    {
        if (array[i].health < current)
        {
            current = array[i].health;
        }
    }
    return current;
}

int digivolLevelCount(digim_t *array, int array_length, enum digimonLevel digi_t)
{
    int counter = 0;
    for (int i = 0; i < array_length; i++)
    {
        if (array[i].level == digi_t)
        {
            counter++;
        }
    }
    return counter;
}
int sameTamer(digim_t *array, int array_length, char *tamer)
{
    int counter = 0;

    for (int i = 0; i < array_length; i++)
    {
        if (strcmp(array[i].tamerName, tamer) == 0)
        {
            counter++;
        }
    }
    return counter;
}
int avarageHealth(digim_t *array, int array_length, char *tamer)
{
    int sumHealth = 0;
    int numOfDigis = 0;
    for (int j = 0; j < array_length; j++)
    {
        if (strcmp(array[j].tamerName, tamer) == 0)
        {
            sumHealth += array[j].health;
            numOfDigis++;
        }
    }
    return sumHealth / numOfDigis;
}