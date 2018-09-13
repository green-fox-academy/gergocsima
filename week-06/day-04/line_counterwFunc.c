#include "count_lines_func.h"

int main()
{
    char inputfile[] = "my-file.txt";

    printf("The number of lines in the %s file: %d", inputfile, lineCounter(inputfile));
}