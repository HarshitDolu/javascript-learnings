const proto={

    slogan:function(){
        return `This is good`;
    },

    changeName:function(nam){
        this.name=nam;
    }
}

const h1=Object.create(proto); // creating prototype of object
h1.name="Harshit";

//console.log(h1);
//prototype of object and constructor shares

function emp(name,salary,exp){
    this.name=name;
    this.salary=salary;
    this.exp=exp;
}

emp.prototype.slogan=function(){
    return `this is best ${this.name} `;
}

let obj1=new emp("Harsht",70000,0);
console.log(emp.prototype);

function prog(name,salary,exp,lang){
    emp.call(this,name,salary,exp);
    this.lang=lang;

}
//prototype inherit
prog.prototype=Object.create(emp.prototype);

prog.prototype.constructor=prog;
let m1=new prog("Jain",50000,0,"Javascript");
console.log(m1);