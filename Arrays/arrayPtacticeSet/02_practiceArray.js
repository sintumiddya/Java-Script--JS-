/*
 Q2. For a given array with price of 5 items -> [250,645,300,900,50]
     All items have an offer of 10% OFF on them. Change the array to store final
     price after applying offer.

*/

let Price = [250, 645, 300, 900, 50];
let len = Price.length;
let offer;


for (let i = 0; i < len; i++) {
    offer = Price[i] / 10;
    Price[i] = Price[i] - offer;

}
console.log(Price);