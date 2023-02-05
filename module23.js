let arr = [2,5,7,83,8,23,83];
let newArr = ["samia", "tamia"];
let option = [3,6,1,3];

console.log(Array.isArray(arr));
// console.log(arr.indexOf(83)); //gets the first element index
if(arr.indexOf(83)!== -1){
    console.log("I love u");
}
else
{
    console.log("I hate you");
}

const newMa = arr.concat(newArr);
console.log(newMa);

