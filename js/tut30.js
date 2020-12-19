// button with id
let myBtn=document.getElementById("myBtn");
// div with content
let content=document.getElementById("content");

function getData(){
    url="https://api.github.com/users";

    fetch(url).then((response)=>{

        return response.json(); //response.text()
    }).then((data)=>{
            console.log(data);
    })
}

// data if obj use stringify

function postData(){
    url="https://api.github.com/users";
    //data=
params={
    method: 'post',
    headers:{
        'content-Type':'application/json'
    },
    body: JSON.stringify(data)
}
    fetch(url,params).then((response)=>{

        return response.json()
    }).then((data)=>{
            console.log(data);
    })
}


getData();

