function miniMaxSum(arr) {
    let temp = 0;
    for(let i = 0; i< 5; i++){
        for(let j = 0; j< 5; j++)
        {
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            
        }
    }
    
    const min = arr[0]+ arr[1]+ arr[2]+ arr[3];
    const max = arr[1]+ arr[2]+ arr[3]+ arr[4];
    
    console.log(min, max);

}


//It contains onlly the desired function
// This file does not have full code







