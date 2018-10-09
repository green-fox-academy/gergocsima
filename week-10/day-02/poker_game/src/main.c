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
int main()
{
	int player_number;
	int card_num;
	//card_t cards[80];
	//read_hands_from_file("../hand.txt", player_number);
	player_t *player = read_hands_from_file("../hand.txt", &player_number);
	printf("\n********************* The list of the players and their cards loaded into the system ***********************************\n");
	/*printf("%s\n", player[0].name);
    printf("%u\n", player[0].suit_one);
    printf("%u\n", player[0].card_one);
    printf("%u\n", player[0].suit_two);
    printf("%u\n", player[0].card_two);
    printf("%s\n", player[3].name);
    printf("%u\n", player[3].suit_one);
    printf("%u\n", player[3].card_one);
    printf("%u\n", player[3].suit_two);
    printf("%u\n", player[3].card_two);*/
	card_num = read_number_of_cards();
	printf("\n********************* The random number of your choice loaded into the system ************************************\n");
	card_t *card_deck = (card_t *)malloc(52 * sizeof(card_t));
	deck(card_deck);
	printf("\n********************* The new deck of cards loaded into the system ***********************************************\n\n");
	// for (int i = 0; i < 52; i++)
	// {
	//     printf("CardNr: %d Suite: %d Deck:%d\n", i + 1, card_deck[i].suit, card_deck[i].deck);
	// }
	// printf("Deck:%d\n", card_deck[0].deck);
	// printf("suit:%d\n", card_deck[0].suit);
	// printf("Deck:%d\n", card_deck[50].deck);
	// printf("suit:%d\n", card_deck[50].suit);
	card_t *cards_in_hand = read_hands("../hand.txt", &player_number);
	printf("\n********************* The list of the players cards loaded into the system ***************************************\n\n");
	card_t *new_cards = (card_t *)malloc(100 * sizeof(card_t));
	genearte_cards_table(card_num, cards_in_hand, card_deck, new_cards, player_number);
	printf("\n********************* The %d number of random cards loaded into the system ***************************************\n\n", card_num);
	player_t *winner = decide_winner(player, new_cards, player_number, card_num);
	printf("\n********************* THE WINNER IS: %s **************************************************************************\n\n", winner[0].name);
	printf("\n********************* Poiints of the winner: %d *******************************************************************\n\n", winner[0].points);
	for (int i = 0; i < player_number; i++)
	{
		printf("Name: %s Points: %d\n", player[i].name, player[i].points);
	}
	// for (int i = 0; i < card_num; i++)
	// {
	//     printf("Card on table %d suite %u\n", i, new_cards[i].suit);
	//     printf("Card on table %d deck %u\n", i, new_cards[i].deck);
	//     printf("Card on table %d status %u\n", i, new_cards[i].status);
	// }
	//************print cards in hands***************************–
	// int player_id = 1;
	// for (int i = 0; i < player_number * 2; i++)
	// {
	//     if (i % 2 == 0 && i != 0)
	//     {
	//         ++player_id;
	//     }
	//     printf("Player %d\n", player_id);
	//     printf("suit:%d\n", cards_in_hand[i].suit);
	//     printf("Deck:%d\n", cards_in_hand[i].deck);
	// }
	//card_t *rancard = malloc(52 * sizeof(card_t));
	//generate_random_card(rancard);
	// printf("Rand1suite: %d\n", rancard[0].suit);
	// printf("Rand1deck: %d\n", rancard[0].deck);
	//card_t *usable_cards = (card_t *)malloc(100 * sizeof(card_t));
	//usable_cards = genearte_cards_table(&card_num, cards_in_hand, card_deck);
	// for (int i = 0; i < 52; i++)
	// {
	//     printf("Usable card %d:%u", i, usable_cards[i].suit);
	// }
	free(player);
	free(card_deck);
	free(cards_in_hand);
	free(new_cards);
	free(winner);
	return 0;
}