'use strict';
export{}
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
//https://www.reddit.com/r/nevertellmetheodds/
let strictCopmponents :'https:'
let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let stringToReplace = 'bots';
let stringToInsert = 'odds';
let newstring = url.replace(stringToReplace, stringToInsert);
console.log(newstring);
let b = ":";
let position = 5;
let output = [url.slice(0, position), b, url.slice(position)].join('');

url === output;
console.log(url);

// second solution without 'www' cheker extension
let stringToReplaceV2: string = 'bots';
let stringToUseV2: string = 'odds';
let urlStartV2: string = 'https://';
let urlV2: string = 'https//www.reddit.com/r/nevertellmethebots';
urlV2 = urlV2.replace(stringToReplaceV2,stringToUseV2);
if (urlV2.match(urlStartV2)==null) {
  urlV2=urlStartV2.concat(urlV2.slice(urlV2.indexOf('www'),urlV2.length));
}
console.log(urlV2);