'use strict';
export{}
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
//https://www.reddit.com/r/nevertellmetheodds/

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let stringToReplace = 'bots';
let stringToInsert = 'odds';
let newstring = url.replace(stringToReplace, stringToInsert);
console.log(newstring);

console.log(url);