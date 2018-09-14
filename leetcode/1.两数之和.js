/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) { //遍历一遍哈希表
    if(nums.length < 2)
        return false;
    let map = new Map();
    for(let i = 0;i < nums.length;i++){
        let rest = target - nums[i];
        if(map.has(rest)){
            return [map.get(rest),i];
        }
        map.set(nums[i],i);
    }
    return false;
};

console.log(twoSum([2,7,11,15],9));