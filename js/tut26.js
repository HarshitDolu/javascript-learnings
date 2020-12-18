// Ajax tutorial in one video

let fetchBtn=document.getElementById('fetchBtn');

fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log("Button clicked");
    // xhr object banao

    const xhr=new XMLHttpRequest();
    // open the object Get - lenge
    // post url and data

//xhr.open('GET','harry.txt',true);

// post request
//xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
//xhr.getResponseHeader('Content-type','application/json');

xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

// what to do on progress

xhr.onprogress=function(){
    console.log('onprogress');
}
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
}
// 0,1,2,3,4
// 0 = unsent, 2 sent 3 loading 4 complete

xhr.onload=function(){
    if(this.status === 200){

    console.log(this.responseText);}

    else{

        console.log("Some error occured");

    }
}
// send the request
params=`{"name":"Harshit","salary":"200000","age":"21"}`
//xhr.send(params);
xhr.send();

}

let backup=document.getElementById('backupBtn');

backup.addEventListener('click',popHandler);


function popHandler(){
    console.log("Button clicked");
    // xhr object banao

    const xhr=new XMLHttpRequest();
    // open the object Get - lenge


xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

// what to do on progress



xhr.onload=function(){
    if(this.status === 200){
        
        let obj=JSON.parse(this.responseText);
        console.log(obj)
    }

    else{

        console.log("Some error occured");

    }
}
// send the request

xhr.send();



}
