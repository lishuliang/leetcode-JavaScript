/* 最大子序和 
    [-2,1,-3,4,-1,2,1,-5,4]
*/
function maxSubArray(nums) {

    if(nums.length === 0){
        return 0;
    }
    if(nums.length === 1){
        return nums[0];
    }

    var maxSum = nums[0];
    var curSum = 0;

    for(let i=0;i<nums.length;i++){
        if(curSum>=0){
            curSum += nums[i];
        }
        else{
            curSum = nums[i];
        }
        if(curSum>maxSum){
            maxSum = curSum;
        }
    }
    return maxSum;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));