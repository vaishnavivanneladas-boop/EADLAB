let longestWord = function(sentence){

let words = sentence.split(" ");
let longest = "";

for(let word of words){

if(word.length > longest.length)
longest = word;

}

return longest;

}

function findLongest(){

let sentence = document.getElementById("sentence").value;

document.getElementById("result").innerText =
"Longest word: " + longestWord(sentence);

}