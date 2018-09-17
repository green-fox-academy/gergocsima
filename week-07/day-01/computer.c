#include <stdio.h>
#include <stdint.h>

// Use the Computer struct, give values to the fields and print them out in the main!
// Use the Notebook struct, give values to the fields and print them out in the main!

struct Computer
{
    float cpu_speed_GHz;
    int ram_size_GB;
    int bits;
};

typedef struct
{
    float cpu_speed_GHz;
    int ram_size_GB;
    int bits;
} Notebook;

int main()
{

    struct Computer myComputer;
    myComputer.cpu_speed_GHz = 2.6;
    myComputer.ram_size_GB = 8;
    myComputer.bits = 64;
    printf("My computer is %.2f GHz with %d RAM and %d bits.\n", myComputer.cpu_speed_GHz, myComputer.ram_size_GB, myComputer.bits);

    Notebook myNotebook;
    myNotebook.cpu_speed_GHz = 2.6;
    myNotebook.ram_size_GB = 8;
    myNotebook.bits = 64;
    printf("My Notebook is %.2f GHz with %d RAM and it has a processor of %d bits.", myNotebook.cpu_speed_GHz, myNotebook.ram_size_GB, myNotebook.bits);
    return 0;
}