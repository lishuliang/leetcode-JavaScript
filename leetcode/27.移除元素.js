/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    var j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[j++]=nums[i];
        }
    }
    return j;
};

removeElement([3,2,2,3],3);