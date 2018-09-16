#include <stdio.h>
#include <stdlib.h>

// - Create an array variable named `animals`
//   with the following content: `["koal", "pand", "zebr"]`
// - Add all elements an `"a"` at the end

int main()
{
    char animals[3][6] = {"koal", "pand", "zebr"};

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (animals[i][j] == '\0')
            {
                animals[i][j] = 'a';
                animals[i][j + 1] = '\0';
            }
        }
        printf("%s\n", animals[i]);
    }
    return 0;
}