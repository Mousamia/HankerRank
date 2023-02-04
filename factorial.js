function factorial(n){
    var result = 1;
    
    for(let i = 1; i <= number; i++){
        
        // result = 1*1(i), 1 = 1*2(i), 2 = 2*3(i), 6*4(i),
        result =  result*i;
        console.log("result + i", result, i);
    }
    console.log(" i am u looking for",result);
}



var number = 6;
factorial(number);
// factorial(7);