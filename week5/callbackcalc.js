function calculate(a,b,operation){

return operation(a,b);

}

function add(x,y){

return x+y;

}

function addNumbers(){

let a = Number(document.getElementById("a").value);
let b = Number(document.getElementById("b").value);

document.getElementById("result").innerText =
calculate(a,b,add);

}