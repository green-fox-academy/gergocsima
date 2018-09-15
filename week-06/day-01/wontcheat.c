// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"
#include <stdio.h>

int main()
{
    for (int i = 0; i < 100; i++)
    {
        printf("%d:I won't cheat on the exam!\n", i + 1);
    }
    return 0;
}