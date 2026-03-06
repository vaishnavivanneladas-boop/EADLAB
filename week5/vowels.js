let vowelCount = function(str){

let count = 0;

for(let ch of str.toLowerCase()){

if("aeiou".includes(ch))
count++;

}

return count;

}

function countVowels(){

let str = document.getElementById("text").value;

document.getElementById("result").innerText =
"Vowels = " + vowelCount(str);

}