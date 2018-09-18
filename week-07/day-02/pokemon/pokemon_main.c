#include "pokemon.h"

/*
 
 *
 * The "pokemon"-s are stored in an array.
 *
 * Write the following functions:
 * 1) Get faster pokemons than
 *      - parameters:
 *          - array
 *          - array length
 *          - speed
 *      - it returns the count of the faster pokemons than the parameter "speed"
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

int main()
{
    Pokemon pokemon1;
    pokemon1.age = 34;
    strcpy(pokemon1.name, "Sanyi");
    pokemon1.speed = 8.9;
    pokemon1.strength = 9.9;
    pokemon1.type = ROCK;
    Pokemon pokemon2;
    pokemon2.age = 17;
    strcpy(pokemon2.name, "Sanyika");
    pokemon2.speed = 5.4;
    pokemon2.strength = 7.9;
    pokemon2.type = WATER;
    Pokemon pokemon3;
    pokemon3.age = 33;
    strcpy(pokemon3.name, "Feri");
    pokemon3.speed = 4.9;
    pokemon3.strength = 3.9;
    pokemon3.type = PSYCHIC;
    Pokemon pokemon4;
    pokemon4.age = 23;
    strcpy(pokemon4.name, "Zolcsi");
    pokemon4.speed = 8.9;
    pokemon4.strength = 9.9;
    pokemon4.type = FAIRY;
    Pokemon pokemon5;
    pokemon5.age = 40;
    strcpy(pokemon1.name, "Bendegúz");
    pokemon1.speed = 9.9;
    pokemon1.strength = 9.9;
    pokemon1.type = DRAGON;

    Pokemon myPokemons[] = {pokemon1, pokemon2, pokemon3, pokemon4, pokemon5};
    printf("The number of faster pokemons are: %d\n", fasterPok(myPokemons, 5, 4.4));
    printf("The number of selected type pokemons are %d.\n", typeCounter(myPokemons, 5, WATER));

    return 0;
}