let square = [1,2,1,4,5,2];
var ways = 0 ;
var sum = 0;
var j = 0;
var index = 0 ;
var m = 0;
for (i = 0 ; i< square.length ; i++){
    sum = 0;
    index = i ;
    for( j = 0; j < m; j++){
        sum += square[index++];
        console.log(sum);
    }
    
    console.log(sum);

}