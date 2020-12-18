// variables in JS

// var,let,const
var name="Harshit";
console.log(name)
var channel;
var marks=34;
// channel='jain'
console.log(name,channel);

// Rules for creating JS variables
/*
1. cannot start with no
2. case sensitive 
3. start with letter,num,_,$
*/

const nam="Harry Potter";
// nam="Dolu" cannot do this
// var global scope
// 
console.log(nam);
// let block level yaa local variable
{

    let city="Rampuri";
    console.log(city);
}
const arr1=[1,2,3,4];
arr1.push(5);
arr1[1]=3;
console.log(arr1);

/*
    1.camelCase
    2. kebab-case
    3. snake_case
    4. PascalCase
*/