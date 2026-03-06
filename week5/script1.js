function isPalindrome(num){

    let original=num;
    let reverse=0;

    while(num>0){
        let digit=num%10;
        reverse=reverse*10+digit;
        num=Math.floor(num/10);
    }

    return original==reverse;
}

function checkPalindrome(){

    let num=document.getElementById("number").value;

    if(isPalindrome(num)){
        document.getElementById("result").innerText="It is a Palindrome Number";
    }
    else{
        document.getElementById("result").innerText="Not a Palindrome Number";
    }

}