// type conversion and coercion
let myvar;
myvar=34;
myvar=String(34);

console.log(myvar,(typeof myvar));

let date=String(new Date());
console.log(date,(typeof date));

let arr=[1,2,3,4,5];
console.log(arr.length);

let i=5;
console.log(i.toString());

let stri=Number("3456");
let num=parseInt('34');
let nu=parseFloat('34.4567');
console.log(nu.toFixed(3),(typeof nu));

let m1=parseInt("634");
let m2=34;

console.log(m1+m2);
