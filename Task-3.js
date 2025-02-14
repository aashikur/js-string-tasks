// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`

// function containsAllVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     str = str.toLowerCase();
//     return vowels.every(vowel => str.includes(vowel));
// }

// Example usage:
const str = "the aeiou";

let flg1 = flg2 = flg3 = flg4 = flg5 = 0;

for(const i of str){
    if(i.toLowerCase() === 'a') flg1 = 1;
    if(i.toLowerCase() === 'e') flg2 = 1;
    if(i.toLowerCase() === 'i') flg3 = 1;
    if(i.toLowerCase() === 'o') flg4 = 1;
    if(i.toLowerCase() === 'u') flg5 = 1;

}

let AllVows = flg1 + flg2 + flg3 + flg4 +flg5;

if(AllVows === 5)
    console.log(true);
else 
    console.log(false);