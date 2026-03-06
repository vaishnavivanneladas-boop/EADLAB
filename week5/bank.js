function BankAccount(name,balance){

this.name=name;
this.balance=balance;

this.deposit=function(amount){

this.balance=this.balance+amount;
return this.balance;

}

}

let account=new BankAccount("Ravi",1000);

function depositMoney(){

let newBalance=account.deposit(500);

document.getElementById("result").innerHTML =
"New Balance: "+newBalance;

}