function Student(name,age,course){

this.name = name;
this.age = age;
this.course = course;

}

function createStudent(){

let s1 = new Student("vaishnavi",20,"IT");

document.getElementById("result").innerText =
s1.name + " " + s1.age + " " + s1.course;

}