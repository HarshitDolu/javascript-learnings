//response from server

const students=[
{name:"Harshit", subject:"Javascript"},
{name:"Rohan", subject: "Machine Learning"}

]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        callback();
    },3000);
}

function getStudents(){

    setTimeout(function(){
        let str="";
students.forEach(function(student){

    str+=`<li> ${student.name}</li>`;
});
document.getElementById('students').innerHTML=str;

    },1000);
}

let std={name:'sunny',subject:"Python"};
enrollStudent(std,getStudents);
//getStudents();