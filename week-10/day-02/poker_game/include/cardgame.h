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