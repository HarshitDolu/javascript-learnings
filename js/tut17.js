document.getElementById('heading').addEventListener('click',function(e){
let val;
console.log('you have clicked the heading');
val=e.target; // gives element
val=e.target.className;
val=Array.from(e.target.classList);

console.log(val);
// location.href='//harshitjain.com';
})

//mouseover