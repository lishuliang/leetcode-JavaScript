/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let index = -1;
    //index = nums.indexOf(target);
    for(let i = 0;i < nums.length;i++){
        nums[i] === target && (index = i);
    }
    return index;
};
