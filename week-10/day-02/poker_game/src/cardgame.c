#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
#include "cardgame.h"

/*
read_hands_from_file(filename); -> return array of names with their hands and size
   read_number_of_cards(); -> returns the number that was entered
   generate_random_cards(number, random_cards); -> fills random_cards array with 'number' random cards
   decide_winner(random_cards, array of names with hands and size); -> returns a name
*/
state_t get_satus(int n)
{
    if (n == 0)
    {
        return FREE;
    }
    else if (n == 1)
    {
        return USED;
    }
    return 0;
}
suits_t get_suite(char c)
{
    if (c == 'S')
    {
        return SPADE;
    }
    else if (c == 'D')
    {
        return DIAMOND;
    }
    else if (c == 'H')
    {
        return HEART;
    }
    else if (c == 'C')
    {
        return CLUB;
    }
    return 0;
}
deck_t get_deck(char s)
{

    if (s == '1')
    {
        return TEN;
    }
    else if (s == '2')
    {
        return TWO;
    }
    else if (s == '3')
    {
        return THREE;
    }
    else if (s == '4')
    {
        return FOUR;
    }
    else if (s == '5')
    {
        return FIVE;
    }
    else if (s == '6')
    {
        return SIX;
    }
    else if (s == '7')
    {
        return SEVEN;
    }
    else if (s == '8')
    {
        return EIGHT;
    }
    else if (s == '9')
    {
        return NINE;
    }
    else if (s == 'J')
    {
        return JACK;
    }
    else if (s == 'Q')
    {
        return QUEEN;
    }
    else if (s == 'K')
    {
        return KING;
    }
    else if (s == 'A')
    {
        return ACE;
    }
    return 0;
}