#include <stdio.h>
#include <string.h>
#include <stdlib.h>
extern int taskNum;
typedef struct List
{
    char task[1000];
    int status;
} List;

void startup();
void printTask(List *array);
void addTask(List *array);
void completeTask(List *array);
void removeTask(List *array);
void clrscr();