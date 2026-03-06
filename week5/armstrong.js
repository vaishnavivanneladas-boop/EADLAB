function checkArmstrong(){

let num = document.getElementById("num").value;
let sum = 0;
let temp = num;

while(temp > 0){

let digit = temp % 10;
sum += digit * digit * digit;

temp = Math.floor(temp / 10);

}

if(sum == num)
document.getElementById("result").innerText = "Armstrong Number";
else
document.getElementById("result").innerText = "Not Armstrong";

}