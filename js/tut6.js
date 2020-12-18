const name="Harshit";
const greeting="Good Morning";

console.log(name+" "+greeting);

let html="<h1>Hello</h1>"+"<p>Hey Folks</p>";

html=html.concat("this");
/*
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());*/

console.log(html[0]);
console.log(html.indexOf('this')); // first occurance

console.log(html.lastIndexOf('<'));

console.log(html.charAt(3));
console.log(html.endsWith('this'));
// s.includes('str');
// s.substring(1,4)  1,2,3..

// s.slice(-4) aakhri ka chaar

console.log(html.split(' '));
console.log(html.replace('this','it'));
// only first ocurrance

let fruits='orange'
let hml=`
        Hello ${name}
        <h1> This is Heading </h1>
        <p> You like ${fruits}</p>
`;

document.body.innerHTML=hml;



