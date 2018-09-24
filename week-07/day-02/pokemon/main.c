#include "pokemon.h"

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
    pokemon4.strength = 8.9;
    pokemon4.type = DRAGON;
    Pokemon pokemon5;
    pokemon5.age = 40;
    strcpy(pokemon5.name, "Bendegúz");
    pokemon5.speed = 9.9;
    pokemon5.strength = 9.9;
    pokemon5.type = DRAGON;

    Pokemon myPokemons[] = {pokemon1, pokemon2, pokemon3, pokemon4, pokemon5};
    printf("The number of faster pokemons are: %d\n", fasterPok(myPokemons, 5, 12));
    printf("The strongest type of pokemon: %s\n", strongestType(myPokemons, 5, 6));
    printf("The number of selected type pokemons are %d.\n", typeCounter(myPokemons, 5, DRAGON));
    printf("The maximum strength in the selected type is: %.2f\n", highestType(myPokemons, 5, DRAGON));
    return 0;
}