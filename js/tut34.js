let re=/^har/
let s="hashit is harshit"
// charat means starts with
re=/hit$/ // means ends with
re=/h.rshit/  // exactly one character

re=/h*rshit/  // matches 0 or more character
re=/ha?rryi?/  // ? means optional

let ans=re.test(s);
console.log(ans);
