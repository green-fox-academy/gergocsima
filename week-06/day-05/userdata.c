#include <stdio.h>
#include <string.h>

// create a program which asks for full name and age
// and stores it in a char array
// parse that array to first_name, last_name, age (use tokenizing)
// print out the the stored variables
// example:
//   printf("Your name is: %s %s and you are %d years old", first_name, last_name, age);

int main()
{
    //     char str1[100];
    //     char newString[10][10];
    //     int i, j, ctr;
    //     printf("\n\n Split string by space into words :\n");
    //     printf("---------------------------------------\n");

    //     printf(" Input  a string : ");
    //     fgets(str1, sizeof str1, stdin);

    //     j = 0;
    //     ctr = 0;
    //     for (i = 0; i <= (strlen(str1)); i++)
    //     {
    //         // if space or NULL found, assign NULL into newString[ctr]
    //         if (str1[i] == ' ' || str1[i] == '\0')
    //         {
    //             newString[ctr][j] = '\0';
    //             ctr++; //for next word
    //             j = 0; //for next word, init index to 0
    //         }
    //         else
    //         {
    //             newString[ctr][j] = str1[i];
    //             j++;
    //         }
    //     }
    //     printf("\n Strings or words after split by space are :\n");
    //     for (i = 0; i < ctr; i++)
    //         printf(" %s\n", newString[i]);
    //     return 0;

    //     return 0;
    // }
    char str1[100];
    printf(" Input  a string : ");
    fgets(str1, sizeof str1, stdin);

    printf("Splitting string \"%s\" into tokens:\n", str1);
    pch = strtok(str1, " ");
    int index = 0;
    char *first_name = strtok(str1, " ");
    char *last_namestrtok(NULL, " ");
    char *years;
    while (pch != NULL)
    {
        //printf("%s\n", pch);
        if (first_name == 0)
        {

            first_name = pch;
            pch = strtok(NULL, " ");
        }
        else if (last_name == 0)
        {
            last_name = strtok(NULL, " ");
            ;
        }
        else
        {
            years = strtok(NULL, " ");
            ;
        }
        return 0;
    }
    printf("%s%s%d", first_name, last_name, atoi(years));
}