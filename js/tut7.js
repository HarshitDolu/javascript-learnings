const marks=[2,3,4,5,6];
const fruits=['Orange','Apple','Pineapple'];

const mixed=['str',89,[3,5]];

const arr=new Array(10,11,21,'Orange');

console.log(arr.length);
console.log(Array.isArray(arr));


let value=marks.indexOf(4);
console.log(value);
/*
marks.push(8);   //push_back
marks.unshift(1000);    // push_front
marks.pop();  // pop_back
marks.shift();  // pop_front()
marks.splice(1,3);
*/


marks.reverse();
let marks1=[1,2,3,4];
let marks2=[5,6,7,8];
marks1=marks1.concat(marks2);
console.log(marks1);


let myobj={
    name:'Harshit',
    channel:'JainHarshit',
    isActive: true,
    marks3:[1,5,6,9]

}

console.log(myobj.marks3);