// generators in javascript
// on the fly value 
function* numberGen(){
while(true){
    yield i++;
}
}

const gen= numberGen();
console.log(gen.next());
