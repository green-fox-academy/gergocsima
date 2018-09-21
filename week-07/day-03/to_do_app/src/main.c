#include "todoapp.h"
int taskNum;

int main()
{

    List listTask[20];
    int program = 1;
    clrscr();
    startup();
    char selector;
    printf("\nPlese select a function to use:\n");
    while (program != 0)
    {

        scanf("%c", &selector);
        switch (selector)
        {

        case 'l':
            clrscr();
            printf("\n**********************************************\n");
            printf("\nTask list:\n");
            printf("\n**********************************************\n");
            printTask(listTask);
            printf("\n**********************************************\n");
            printf("\n a: add * l: list * c: complete * r: remove *\n");
            printf("\nPlese select a function to use:\n");
            break;
        case 'a':
            clrscr();
            printf("\n**********************************************\n");
            printf("\nPlease enter the task name:\n");
            addTask(listTask);
            printf("\n**********************************************\n");
            printf("\n a: add * l: list * c: complete * r: remove *\n");
            printf("\nPlese select a function to use:\n");
            break;
        case 'c':
            clrscr();
            printf("\n**********************************************\n");
            printf("\nPlease enter the completed task index:\n");
            completeTask(listTask);
            printf("\n**********************************************\n");
            printf("\n a: add * l: list * c: complete * r: remove *\n");
            printf("\nPlese select a function to use:\n");
            break;
        case 'r':
            clrscr();
            printf("\n**********************************************\n");
            printf("\nPlease enter the task index to remove:\n");
            removeTask(listTask);
            printf("\n**********************************************\n");
            printf("\n a: add * l: list * c: complete * r: remove *\n");
            printf("\nPlese select a function to use:\n");
            break;
        case 'x':
            program = 0;
            break;
        }
    }
    return 0;
}