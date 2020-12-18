let element=document.createElement('li');
let text=document.createTextNode('I am text node');

element.appendChild(text);

element.className='child1';
element.id='createdli';
//element.innerText="Hello folks";
let ul=document.querySelector('ul.this');
ul.appendChild(element);

console.log(ul);

let elm2=document.createElement('h1');
elm2.className='elm2';
elm2.id='elm2';
let tnode=document.createTextNode('This is created for elm2');

elm2.appendChild(tnode);
element.replaceWith(elm2);

let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));


myul.removeChild(document.getElementById('faa'));

let pr=elm2.getAttribute('class');
let pp=elm2.hasAttribute('href');  // false

// elm2.removeAttribute('id');


let elu=document.querySelector('ul.this');

let cre=document.createElement('h1');
cre.innerHTML='<a href="www.google.com"> Go to Google</a>'
//let ip=document.createTextNode('Go to Harshit jain channel');

//cre.appendChild(ip);
cre.id='link';
cre.className='link';

cre.setAttribute('href','www.google.com');
elu.appendChild(cre);
console.log(elu);


















