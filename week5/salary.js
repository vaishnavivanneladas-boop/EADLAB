function netSalary(base,allowance=2000,tax=500){

return base + allowance - tax;

}

function calculateSalary(){

let base = document.getElementById("salary").value;

document.getElementById("result").innerText =
"Net Salary = " + netSalary(base);

}