/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* var searchInsert = function(nums, target) {
    if(nums.indexOf(target) === -1){
        nums.push(target);
        nums.sort((a,b) => a - b);
    }  
    console.log(nums);
    return nums.indexOf(target);
}; */

var searchInsert = function(nums, target) {
    for(let i = 0;i < nums.length;i++){
        if(target <= nums[i]){
            return i;
        }
    }
    return nums.length;
};

console.log(searchInsert([3,5,7,9,10],8))