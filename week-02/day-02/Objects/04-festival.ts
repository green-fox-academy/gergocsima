'use strict';

let watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

let enter: any = [];
function securityCheck(list: any) {
  for (let i: number = 0; i < list.lenght; i++) {
    if (list[i].guns != 0) {
      //watchlist= watchlist+queue[i];
      watchlist.push(list.slice(0, i))
    }
    else if (list[i].alcohol > 0) {
      securityAlcoholLoot = securityAlcoholLoot + list[i].alcohol;
      //console.log(list[i].alcohol);
      list[i].alcohol = 0;
      enter=enter+list[i];
      return securityAlcoholLoot;
    }
    else {
      enter = enter + list[i]
      return enter;
    }

  }
  console.log('Can eneter '+enter);
  console.log('has gun '+watchlist);
  console.log('Alcohol confiscated :'+securityAlcoholLoot)
}
console.log(securityCheck(queue));

//console.log(enter.push(queue.slice(0,1)));
//console.log(queue[2].alcohol);
//console.log(queue[0].alcohol=0);
//console.log(queue[1]);
//console.log(queue);
