#include <stdio.h>
#include <stdlib.h>
void greetingFunction(char *any);

// - Create a char array variable named `al` and assign the value `Greenfox` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings dear, Greenfox`
// - Greet `al`

int main()
{

    char al[] = "GreenFox";

    greetingFunction(al);
    return 0;
}

void greetingFunction(char *ab)
{
    printf("Greetings dear, %s !\n", ab);
}
