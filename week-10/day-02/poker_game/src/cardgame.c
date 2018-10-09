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

player_t *read_hands_from_file(const char *file_name, int *player_number)
{
    FILE *fp;
    fp = fopen(file_name, "r");

    player_t *players = (player_t *)malloc(100 * sizeof(player_t));

    if (fp == NULL)
    {
        printf("Can't read the file\n");
        return NULL;
    }
    char buffer[256];
    char *token;
    int counter = 0;

    while (fgets(buffer, 256, fp))
    {
        token = strtok(buffer, " ");
        strcpy(players[counter].name, token);
        token = strtok(NULL, ",");

        players[counter].suit_one = get_suite(token[0]);
        players[counter].card_one = get_deck(token[1]);
        token = strtok(NULL, "");
        players[counter].suit_two = get_suite(token[0]);
        players[counter].card_two = get_deck(token[1]);
        ++counter;
    }
    *player_number = counter;
    return players;

    fclose(fp);
}
card_t *read_hands(const char *file_name, int *player_number)
{
    FILE *fp;
    fp = fopen(file_name, "r");

    card_t *card_hand = (card_t *)malloc(100 * sizeof(card_t));
    if (fp == NULL)
    {
        printf("Can't read the file\n");
        return NULL;
    }
    char buffer[256];
    char *token;
    int counter = 0;
    int handin = 0;

    while (fgets(buffer, 256, fp))
    {
        token = strtok(buffer, " ");
        token = strtok(NULL, ",");
        card_hand[handin].suit = get_suite(token[0]);
        card_hand[handin].deck = get_deck(token[1]);
        ++handin;
        token = strtok(NULL, "");
        card_hand[handin].suit = get_suite(token[0]);
        card_hand[handin].deck = get_deck(token[1]);
        ++handin;
        ++counter;
    }
    *player_number = counter;
    return card_hand;

    fclose(fp);
}
