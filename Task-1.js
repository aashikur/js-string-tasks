// ### Task-1: 
// Count how many times a string has the letter `a`


let str = "Example Num of string is here a";


let cnt = 0;
for(const i of str){
    if(i === 'a') cnt++;
}

console.log(cnt);