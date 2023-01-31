/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    var i = 0;
    var j = 0;
    var index = 0;
    var len = s.length;
    var result = 0;
    var sum = 0;

    // for one element arrow condition
    if(s.length==1 && s[0] == d){
        return 1;
    }


    // looping the main array
    for(i = 0; i< len - (m-1); i++){
        //m-1 here becaue if we loop throug full length after the last number then it will add sum+NaN-> means it wont get a number
        sum = 0 ;
        index = i ;
        // Creating sub array of m length
        for ( j = 0 ; j < m ; j++){
            sum += s[index++];
        }

        if(sum == d){
            result++;
        }
    }

    return result;
}

