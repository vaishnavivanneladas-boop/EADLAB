function discountCalculator(discount){

return function(price){

return price - (price * discount / 100);

}

}

let tenPercent = discountCalculator(10);

function calculateDiscount(){

let price = document.getElementById("price").value;

document.getElementById("result").innerText =
"Price after discount = " + tenPercent(price);

}