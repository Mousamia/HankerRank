//breaking the record
// The function is expected to return an INTEGER_ARRAY.
//  * The function accepts INTEGER_ARRAY scores as parameter.

//following fuction accepts scores array as input
// this fuction will return best and worst in aray

function breakingRecords(scores) {
    var bestScore = scores[0];
    var best = 0;    
    var worstScore = scores[0];
    var worst = 0;
    var i = 0;
    var len = scores.length;
    for(var i = 0 ; i < len ; i++){
        if(scores[i]> bestScore){
            bestScore = scores[i];
            best++;
            
        }
        else if (scores[i] < worstScore){
            worstScore = scores[i];
            worst++;
            
        }
    }
    return [best, worst];
}