function power(base,exp=2){

return base ** exp;

}

function findPower(){

let base = document.getElementById("base").value;

document.getElementById("result").innerText =
"Result = " + power(base);

}