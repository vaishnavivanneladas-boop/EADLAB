function simpleInterest(p,t,r=5){

return (p*t*r)/100;

}

function calculateSI(){

let p = document.getElementById("p").value;
let t = document.getElementById("t").value;

document.getElementById("result").innerText =
"Simple Interest = " + simpleInterest(p,t);

}
