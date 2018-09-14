/**
 * @param {number[]} height
 * @return {number}
 */

let maxArea = function(height) { //暴力
    let maxBulk = 0;
    for(let i = 0;i < height.length;i++){
        for(let j = 0;j < height.length;j++){
            let width = j - i;
            let h = Math.min(height[i],height[j]);
            let bulk = width * h;
            maxBulk = Math.max(maxBulk,bulk);
        }
    }

    return maxBulk;
};

let maxArea = function(height) { //双指针
    let start = 0,
        end = height.length - 1,
        maxBulk = 0;
    
    while(start < end){
        let width = end - start;
        let h = Math.min(height[start],height[end]);
        let bulk = width * h;
        maxBulk = Math.max(maxBulk,bulk);
        height[start] < height[end] ? start++ : end--;
    }
    
    return maxBulk;
};



console.log(maxArea([1,8,6,2,5,4,8,3,7]));