let text = "I have lot to tell BUT I cant tell but right now cause i feel tired";
console.log(text.toLowerCase().includes('but')); //lowercase function //includes fuction
// string methods
// 1. includes (case sensitive)
// 2. 

if(text.indexOf("lot") !== -1){
    console.log("ami samia");
}

console.log(text.startsWith('I have'));
// console.log(text.split(' '));
// console.log(text.split("")); 


console.log(text.slice(2, 6)); 
console.log(text.slice(2));

const lines2 = [ "may", "allah ,make, me, capable"];
const lines1 = [ "I, have", "to", "do something very quickly"];

let newLine = console.log(lines1.join(':')); 
console.log(newLine);

let first = 5;
let second = 7;

// approach:1 (Its called destructuring)
// console.log(first, second);
// var temp = first;
// first = second;
// second = temp;
console.log(first, second);

// // approach:2
// [first, second] = [second, first];
// console.log(first, second);



// approach: 3 : applicable for numbers
let a = 9;
let b = 4;
console.log(a,b);
a = a+b;
b=  a-b;
a=  a-b;
console.log(a,b);

