#include <stdio.h>
#include <stdlib.h>
#include <string.h>
/*
 * Hacker:
 *
 * Create a function that should convert binary numbers
 * to a letter (from ASCII code).
 * Binary numbers are stored in the text.txt.
 *
 * text.txt example:
 * 01001101
 * 00101011
 * 
 * Write the converted letters into me_the_hacker.txt.
 *
 * me_the_hacker.txt example:
 * kitty
 *
 * The function should should return with the converted word. (cica)
 */
int main()
{
	char ch, file_name[25];
	int n = 0;
	FILE *fp;

	printf("Enter name of a file you wish to see\n");
	gets(file_name);

	fp = fopen(file_name, "r");

	if (fp == NULL)
	{
		perror("Error while opening the file.\n");
		exit(EXIT_FAILURE);
	}

	printf("The contents of %s file are:\n", file_name);
	while ((ch = fgetc(fp)) != EOF)
		printf("%c", ch);
	fclose(fp);
	fp = fopen(file_name, "r");
	int lineNr = 0;
	for (n = getc(fp); n != EOF; n = getc(fp))
		if (n == '\n')
			lineNr = lineNr + 1;

	printf("number of lines in  %s   = %d\n", file_name, lineNr);
	fclose(fp);
	int binaryArray[lineNr];

	return 0;
}
