// reverse by character

// function reverseString(mystr){
//     for(let i = mystr.length-1; i >=0 ; i--){
//         console.log(mystr[i]);
//     }

// }

let text = "Dr. Kushal is a good person";
// let result = reverseString(text);

 // declaring blank array
    var items = [];
// reverse by word

function reverseWords(mystr){
    const words = mystr.split(' ');
    // console.log(typeof(words));
    for(let i = words.length-1; i>= 0 ; i--){
        // element are each words getting whilelooping
        let element = words[i];
        // we are pushing elements in empty item array
        items.push(element);
    }
    //  finally joining the array elemnt with* to show as sentence
    // here white space can be used
    console.log(items.join(' '));
    
}
 reverseWords(text);
