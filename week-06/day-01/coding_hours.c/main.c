#include <stdio.h>

main()
{

  int daily_hours = 6;
  int semester_week = 17;   // An average Green Fox attendee codes 6 hours daily
  int workdays_perweek = 5; // The semester is 17 weeks long
  int avarage_weekly_hours = 52;

  printf("%d\n", ((17 * 52) / (6 * 5 * 17)) * ((17 * 52) / 100)); // if the attendee only codes on workdays.
}
