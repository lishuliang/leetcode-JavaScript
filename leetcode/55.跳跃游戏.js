/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = Number.MIN_VALUE;
    for(let i = 0;i < nums.length;i++){
        if(i > max)
            return false;
        max = Math.max(nums[i] + i,max);  //贪心求解到达最远步数
    }
    return true;
};

console.log(canJump([3,2,1,0,4]));