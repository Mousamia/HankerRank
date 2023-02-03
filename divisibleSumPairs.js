// divisbleSumPair Solution


function divisibleSumPairs(n, k, ar) {
    // Write your code here
    var sum = 0;
    var pair = 0;
    
    // for single element array where the element is divisible by k
    if(n==1 && (ar[0]%k == 0)){
       pair = 1;
    }
    else if (n > 1){
        for(i = 0; i<n; i++){
            // for adding the values
            for(j = i+1; j<n; j++){
                sum = ar[i] + ar[j];
                if(sum % k == 0){
                    pair++;
                    // console.log("I am pair", pair);
                }
            }
        }
        
    }
        
    else {
        pair = 0;
    }

    return pair;
}

var holder = divisibleSumPairs(6, 3, [1,3,2,6,1,2]);
console.log("pair", holder);