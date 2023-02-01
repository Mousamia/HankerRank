function breakingRecords(scores) {
    // Write your code here
    var max = 0;
    var min = 0;
    var high = 0;
    var low = 0;
    for(let i = 0; i< scores.length ; i++){
        if(scores[i]> max){
            max = scores[i];
            high++;
            
        }
        if(scores[i] < min){
            min = scores[i];
            low++;
            
        }
    }
    
    return [high, low];
}

