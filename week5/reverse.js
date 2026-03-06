let reverse = function(str){

return str.split("").reverse().join("");

}

function reverseString(){

let str = document.getElementById("text").value;

document.getElementById("result").innerText = reverse(str);

}