#include <stdio.h>
#include <stdlib.h>

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
// But this time use only switch case!

int main()
{
    for (int i = 1; i <= 100; i++)
    {
        switch (i)
        {
            switch (i % 15)
            {

            case 0:
                printf("FizzBuzz\n");
                break;
            }
            switch (i % 5)
            {
            case 0:
                printf("Fizz");
                break;
            }
            switch (i % 3)
            {
            case 0:
                printf("Buzz");
                break;
            default:
                printf("%d", i);
                break;
            }
        }
    }
    return 0;
}