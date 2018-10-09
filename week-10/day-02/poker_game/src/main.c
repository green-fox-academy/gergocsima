#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "cardgame.h"
/*
random ennyi lap a paklibol

   dontsuk el ki nyert. a handeket fajlbol kell kiolvasni.
   csak par es 2 par szamit. Ha egyik sincs akkor a magas lap dont.



   read_hands_from_file(filename); -> return array of names with their hands and size
   read_number_of_cards(); -> returns the number that was entered
   generate_random_cards(number, random_cards); -> fills random_cards array with 'number' random cards
   decide_winner(random_cards, array of names with hands and size); -> returns a name


Johny S10,H2
Gergo CJ,D5
Gergo2 SA,HA
Dani CQ,CK
S - Spades(Pikk)
H - Hearts(Kor)
C - Clubs(Treff)
D - Diamon(Karo)

J - Jack
Q - Queen
K - King
A - Ace
*/
