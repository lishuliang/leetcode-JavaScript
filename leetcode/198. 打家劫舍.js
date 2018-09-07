/* 198. 打家劫舍 */
function rob(nums) {
    var result = [];
    
    if(nums.length === 0)
        return 0;
    if(nums.length === 1)
        return nums[0];

    result[0] = nums[0];
    result[1] = Math.max(nums[0],nums[1]);

    for(let i=2;i<nums.length;i++){
        result[i] = Math.max(result[i-1],result[i-2]+nums[i]);
    }

    return result[nums.length-1];
};

console.log(rob([5,1,1,4]));