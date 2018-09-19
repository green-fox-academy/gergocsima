#include "todoapp.h"
int taskNum;

int main()
{

    List listTask[20];
    int program = 1;
    startup();
    char selector;
    printf("\nPlese select a function to use:\n");
    while (program != 0)
    {

        scanf("%c", &selector);
        switch (selector)
        {

        case 'l':
            printTask(listTask);
            printf("\nPlese select a function to use:\n");
            break;
        case 'a':
            addTask(listTask);
            printf("\nPlese select a function to use:\n");
            break;
        case 'c':
            completeTask(listTask);
            printf("\nPlese select a function to use:\n");
            break;
        case 'r':
            removeTask(listTask);
            printf("\nPlese select a function to use:\n");
            break;
        case 'x':
            program = 0;
            break;
        }
    }
    return 0;
}