//constructor

function Book(title,author,type){

    this.name=title;
    this.author=author;
    this.type=type;
}

// display constructor

function Display(){

}
Display.prototype.add=function(book){
let tableBody=document.getElementById('tableBody');

    let html=`
    <tr>
               
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>
    
    
    `;
    tableBody.innerHTML+=html;

}

Display.prototype.clear=function(){
    let lib=document.getElementById('lib');
    lib.reset();  // clear form fields

}

Display.prototype.validate=function(book){
 if(book.name.length<2 || book.author.length<2)
 return false;

 else
 return true;

}
Display.prototype.show=function(type,message){

    let mess=document.getElementById('message');
    mess.innerHTML=`

    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message:</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

    `;
setTimeout(function(){

    message.innerHTML=''
},2000);


}



let lib=document.getElementById('lib');
lib.addEventListener('submit',libsubmit);

function libsubmit(e){
let name=document.getElementById('bookName').value;
let author=document.getElementById('author').value;
let fiction=document.getElementById('fiction');
let programming=document.getElementById('programming');
let cooking=document.getElementById('cooking');
let type;
if(fiction.checked){
type=fiction.value;
}

else if(programming.checked){
    type=programming.value;
    }

    else if(cooking.checked){
        type=cooking.value;
        }


    let book=new Book(name,author,type);
    console.log(book);
let display=new Display();
if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success','Your book has been successfully added.')
}
else{
    // show error
    display.show('danger','Sorry you can not add this book.');
}



    e.preventDefault();


}