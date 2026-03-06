let primeFilter = arr => arr.filter(n=>{

for(let i=2;i<n;i++)
if(n%i==0)
return false;

return n>1;

});

function showPrimes(){

let arr = [1,2,3,4,5,6,7,8,9];

document.getElementById("result").innerText =
primeFilter(arr);

}