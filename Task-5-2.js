// Capitalize Every first word in Sentece

const str = "a quick brown hungry fox jump over a Education Bar";
let arr = str.split(' ');

 for(let i =0 ; i<arr.length ; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
 }

let CapFirst = arr.join(" ");

console.log(CapFirst);