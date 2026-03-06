let average = arr => arr.reduce((a,b)=>a+b)/arr.length;

function findAverage(){

let arr = [10,20,30,40];

document.getElementById("result").innerText =
"Average = " + average(arr);

}