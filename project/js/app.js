// if user adds a note add it local storage
showNotes();
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){

let addtxt=document.getElementById("addtxt");
let notes=localStorage.getItem("notes");
if(notes==null){
    notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
notesObj.push(addtxt.value);
localStorage.setItem("notes",JSON.stringify(notesObj));

addtxt.value="";
//console.log(notesObj);

showNotes();



});

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index){
        html+=`

        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
                
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
        
        `
        
    });

    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;

    }
    else{
        notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes`;
    }


}
//function to delete a note

function deleteNote(index){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));

showNotes();


}

let searchtxt=document.getElementById('searchtxt');
searchtxt.addEventListener('input',function(){

 
    let inputval=searchtxt.value.toLowerCase();
    //console.log('Input event fired',inputval);
    let noteCards=document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function(element){

        let cardtxt=element.getElementsByTagName("p")[0].innerText;

        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }

    });



});


