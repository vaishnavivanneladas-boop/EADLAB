function Employee(name,salary){

this.name=name;
this.salary=salary;

this.netSalary=function(){

let tax=this.salary*0.1;
return this.salary-tax;

}

}

let emp=new Employee("Anu",50000);

function showSalary(){

document.getElementById("result").innerHTML =
"Net Salary: "+emp.netSalary();

}