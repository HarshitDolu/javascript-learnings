// error handling

try{
    console.log('Inside try block');
    name();
}
catch(error){

console.log('Inside catch block');
console.log(error.name);
// error.message

}
finally{

    console.log("Finally we will run this");
}

// throw new Error('This is not undefined')
// custom error