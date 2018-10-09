#ifndef CARDGAME_H
#define CARDGAME_H
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
#include "cardgame.h"
typedef enum
{
    USED,
    FREE
} state_t;
typedef enum
{
    CLUB,
    DIAMOND,
    HEART,
    SPADE
} suits_t;
typedef enum
{
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    ACE
} deck_t;

typedef struct players
{
    char name[100];
    suits_t suit_one;
    deck_t card_one;
    suits_t suit_two;
    deck_t card_two;
    int points;
} player_t;

typedef struct card
{
    suits_t suit;
    deck_t deck;
    state_t status;
} card_t;

player_t *read_hands_from_file(const char *file_name, int *player_number);
card_t *deck(card_t *card_deck);
card_t *read_hands(const char *file_name, int *player_number);
card_t *random_cards(int *randomnumb, card_t *cards_in_hands, card_t *all_cards);
card_t *generate_random_card(card_t *card);
card_t *genearte_cards_table(int number, card_t *cards_in_hand, card_t *all_card, card_t *new_cards, int player_num);
player_t *decide_winner(player_t *players, card_t *new_cards, int number_of_players, int rand_card_num);

int read_number_of_cards();
int random_number(int max_num);
//switch case for ranking 1-12 T-J-Q-K-A
#endif //CARDGAME_H