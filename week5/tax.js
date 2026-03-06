function taxGenerator(rate){

return function(income){

return income * rate;

}

}

let tax = taxGenerator(0.1);

function calculateTax(){

let income = document.getElementById("income").value;

document.getElementById("result").innerText =
"Tax = " + tax(income);

}