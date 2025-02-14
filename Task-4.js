// ### Task-4: 
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

// function replaceXWithY(str) {
//     return str.replace(/x/g, 'y').replace(/X/g, 'Y');
// }

// const inputString = prompt("Please enter a string:");
// const resultString = replaceXWithY(inputString);
// console.log(resultString);

const str = "the xray Vision is Xoss Youturbe";

let arr = str.split('');

for(let i = 0; i< arr.length; i++){
    if(arr[i] === 'x') 
        arr[i] = 'y';   
    
    if(arr[i] === 'X') 
            arr[i] = 'Y';

}

// Calling the array to restructre
 console.log(arr.join("")); 