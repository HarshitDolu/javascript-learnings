/*
    1. Single element selector
    2. Multiple element selector

*/
//1. SES

let element=document.getElementById('myfirst');
//element=element.className
//element=element.childNodes;
//element=element.parentNode;
element.style.color='red';
element.innerText="Hero Harshit Jain";
element.innerHTML="<b>Hero Harshit Jain</b>"
//console.log(element);

let set=document.querySelector('#myfirst'); // id
sel=document.querySelector('.child'); // class

sel=document.querySelector('div');
sel.style.color='green';
//console.log(sel);



// 2. Multiple element selector

let ele=document.getElementsByClassName('child');
ele=document.getElementsByClassName('container');
console.log(ele[0].getElementsByClassName('child'));


//console.log(ele.length);
