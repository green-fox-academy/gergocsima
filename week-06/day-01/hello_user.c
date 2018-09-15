#include <stdio.h>
#include <stdlib.h>
int main()
{
    // Modify this program in the printf() to greet user instead of the World!
    // The program should ask for the age of the user
    char user[100];
    int age;
    printf("Please enter your name:\n");
    scanf("%s", user);
    printf("Hello,%s !\n", user);
    printf("Please enter your age:\n");
    scanf("%d", &age);
    printf("Your age is:%d\n", age);

    return 0;
}