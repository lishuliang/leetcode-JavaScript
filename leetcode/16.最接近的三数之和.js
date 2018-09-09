/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3)
    return [];

    const flag = target;
    let res = Number.MAX_VALUE;
    nums = nums.sort((a,b) => a - b);

    for(let i = 0;i < nums.length - 2;i++){
        let start = i + 1;
        let end = nums.length - 1;
        while(start < end){
            let val = nums[start] + nums[end];
            if(nums[i] + val < flag){
                res = Math.abs(target - res) < Math.abs(target - (nums[i] + val)) ? res : nums[i] + val;
                start++;
            }
            else if(nums[i] + val > flag){
                res = Math.abs(target - res) < Math.abs(target - (nums[i] + val)) ? res : nums[i] + val;
                end--;
            }
            else{
                return target;
            }
        }
        while(i < nums.length - 1 && nums[i] === nums[i + 1])  //去重(第一个数字)
            i++;
    }
    return res;
};