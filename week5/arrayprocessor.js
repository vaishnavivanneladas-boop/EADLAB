function processArray(arr,callback){

return arr.map(callback);

}

function process(){

let arr = [1,2,3,4];

let result = processArray(arr,function(x){

return x*2;

});

document.getElementById("result").innerText = result;

}