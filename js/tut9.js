
/*
let j=0;
while(j<40){
    console.log(j);

    j++;

}*/


let arr=[2,3,4,5,6];

arr.forEach(function(element){

    console.log(element);

});


let obj={
    name:'Harshit jain',
    age:21,
    type:"Programmer",
    os:"Windows"
}

for(let key in obj){
  //  console.log(obj[key]);
    console.log(`The ${key} of object is ${obj[key]}`);
}

stt=`hello "Mika"`;
console.log(stt);