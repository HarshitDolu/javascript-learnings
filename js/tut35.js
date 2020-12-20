
let str="harr8 bro"
// character sets


let re=/h[a-z]rshit/
re=/ha[sr]shit/
re=/h[^asr]shit/ // not a,s,r
re=/h[a-zA-Z]rr[yu0-9]/


// quantifiers

re=/har{2}y/ // r exactly two times
re=/har{0,2}y/  // either 0 or 2 times

 // groupings
str="harharshit";

 re=/(har){2}/

 let res=re.test(str);
console.log(res);
