/*localStorage.setItem('Name','Harshit');
localStorage.setItem('Name2','Dolu');
let name=localStorage.getItem('Name');
//localStorage.clear();
//localStorage.removeItem('Name2');
console.log(localStorage.length);

let impArray=['adrak','pyaz','bhindi'];

localStorage.setItem('sabzi',JSON.stringify(impArray));

name=JSON.parse(localStorage.getItem('sabzi'));
console.log(name);
*/


let div=document.createElement('div');
let text=document.createTextNode('This is my element. Click to edit it');
div.appendChild(text);
let container=document.querySelector('.container');
let first=document.getElementById('myfirst');

div.setAttribute('id','elem');
div.setAttribute('class','elem');
div.setAttribute('style','border:2px solid black; width:154px;margin:34px;padding:23px');

container.insertBefore(div,first);


div.addEventListener('click',function(){
let ntextarea=document.getElementsByClassName('textarea').length;

if(ntextarea==0){
    let html=elem.innerHTML;
    div.innerHTML=`<textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea>`;

}
let textarea=document.getElementById('textarea');
textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.Value;



})

});



