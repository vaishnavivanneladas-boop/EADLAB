let secondLargest = arr => {

arr.sort((a,b)=>b-a);

return arr[1];

}

function findSecond(){

let arr = [10,50,30,20,40];

document.getElementById("result").innerText =
"Second Largest = " + secondLargest(arr);

}