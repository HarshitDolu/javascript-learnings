// async returns promise
// await return promise

async function getData(){
url="https://api.github.com/users"
console.log("inside getData");
const response= await fetch(url);
console.log("before response");
const data=await response.json();

console.log("data resolved");
return data;

}


let a=getData();
console.log(a);
a.then(data=>console.log(data));


















/*function helper(){

    return new Promise(function(resolve,reject){

        setTimeout(function(){
            const error=true;
            if(!error){
                console.log("Resolved");
                resolve();
            }
            else{
                reject("Fuck off");
            }

        },2000)





    })
}

helper().then(()=>{
    console("Done!!")
}).catch((e)=>{

    console.log("so jao "+e);

})
*/




