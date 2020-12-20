let reg=/harshit/g // regular exp literal
//reg=/harshit/i  // case insensitive


console.log(reg);
console.log(reg.source);


// functions to match expression

let s="This is great code harshit and harshit I want you to complete this project"

//1. exec() - retun array for match or null for no match


/*let result=reg.exec(s);
console.log(result);
result=reg.exec(s);
console.log(result.input);
result=reg.exec(s);
console.log(result.index);
*/
//2. test - returns true or false if string is there.

//let res=reg.test(s);
//console.log(res);

// 3. match()- array of results [harshit,harshit]
//let res2=s.match(reg);
//console.log(res2);


// 4. search() - return index of first match else -1
let res4=s.search(reg);
console.log(res4);

// 5. replace - return new string with all replacement

let res5=s.replace(reg,'Jain')
console.log(res5);
