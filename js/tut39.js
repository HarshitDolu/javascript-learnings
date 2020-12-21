// for of and for in loop

obj={
    name: "Harshit",
    language: "JavaScript",
    hobbies: "Web developer"
}

//traditional obj

for(let i=0;i<Object.keys(obj).length;i++){
    const ele=obj[Object.keys(obj)[i]];
    console.log(ele);
    
}

// for in - with object, strings loop through all characters

for(let key in obj){
    console.log(obj[key]);
    
}

// for of loop
let name=['Harshit','Jain','OM','Baivaw'];
for(let n in name)
console.log(n);    // 0 1 2 3 (index)


for(let n of name)
console.log(n);   

