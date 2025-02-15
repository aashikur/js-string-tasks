// ### Task-5:
// Capitalize Every first Letter of each word in a String
// "# js-string-tasks" 


// Capitalize Every First Letter
const str = "a quick brown hungry fox jump over a Education Bar";


// Spliting All -> single character array
let arr = str.split('');
for(let i = 0; i<arr.length; i++){

    if(i == 0) arr[0] = arr[0].toUpperCase();
    if(arr[i] == ' '){
        arr[i+1] = arr[i+1].toUpperCase();
    }
}

let capFirst = arr.join("");
console.log(capFirst);

