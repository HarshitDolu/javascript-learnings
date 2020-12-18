function func1(){


    return new Promise(function(resolve,reject){

setTimeout(function(){
    const error=true;
    if(!error){
        console.log('Function: your promise has been resolved');

        resolve();

    }
    else{

        console.log('Function: your promise has not been resolved');
        reject('sorry not fulfilled');
    }

},2000);


    })
}

// then : resolve function , catch: reject function
func1().then(function(){
    console.log("Harshit: Thanks for resolving")
}).catch(function(error){
    console.log('Harshit: very Bad bro. Reason: '+error);
})


// substitute for call back