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