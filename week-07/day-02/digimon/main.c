#include "digimon.h"

int main()
{
    digim_t digi1;
    digi1.age = 30;
    digi1.health = 78;
    strcpy(digi1.name, "Bobek");
    strcpy(digi1.tamerName, "Markusz");
    digi1.level = ROOKIE;

    digim_t digi2;
    digi2.age = 45;
    digi2.health = 58;
    strcpy(digi2.name, "Bajusz");
    strcpy(digi2.tamerName, "Kuszkusz");
    digi2.level = ULTIMATE;

    digim_t digi3;
    digi3.age = 103;
    digi3.health = 88;
    strcpy(digi3.name, "Boboo");
    strcpy(digi3.tamerName, "Rausz");
    digi3.level = ULTIMATE;

    digim_t digi4;
    digi4.age = 67;
    digi4.health = 71;
    strcpy(digi4.name, "Klausz");
    strcpy(digi4.tamerName, "Musz");
    digi4.level = CHAMPION;

    digim_t digi5;
    digi5.age = 20;
    digi5.health = 98;
    strcpy(digi5.name, "Bodo");
    strcpy(digi5.tamerName, "Musz");
    digi5.level = IN_TRAINING;

    digim_t digi6;
    digi6.age = 44;
    digi6.health = 48;
    strcpy(digi6.name, "Bok");
    strcpy(digi6.tamerName, "Mao");
    digi6.level = CHAMPION;

    digim_t digi7;
    digi7.age = 56;
    digi7.health = 48;
    strcpy(digi7.name, "Halo");
    strcpy(digi7.tamerName, "Opi");
    digi7.level = ROOKIE;

    digim_t digi8;
    digi8.age = 3;
    digi8.health = 99;
    strcpy(digi8.name, "Dri");
    strcpy(digi8.tamerName, "Szuszi");
    digi8.level = BABY;

    digim_t myDigimons[] = {digi1, digi2, digi3, digi4, digi5, digi6, digi7, digi8};
    printf("The minimumhelth index in my Digimon group:%d\n", minimumHealth(myDigimons, 8));
    printf("The number of the selected level in this list: %d\n", digivolLevelCount(myDigimons, 8, CHAMPION));
    printf("The number of digimons with the same tamer in this list: %d\n", sameTamer(myDigimons, 8, "Musz"));
    printf("The avarage health of the digimons from the same tamers: %d\n", avarageHealth(myDigimons, 8, "Musz"));
    return 0;
}