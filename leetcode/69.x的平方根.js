/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0)
        return 0;
    else if(x === 1)
        return 1;
    
    var low = 0;
    var high = x;
    var mid = Math.floor(x / 2);
    
    while(low <= high){
        let n = mid * mid;
        if(n > x){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
        mid = Math.floor((low + high) / 2);

    }
    return mid;
};