// ### Task-2: 
// Count how many times a string has the letter `a` or `A`



// Example usage:
const exampleString = "JavaScript is Amazing!";

let cnt = 0;
for(const i of exampleString){
    if(i.toLowerCase() === 'a' )  cnt++;
}

console.log(cnt);