/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
    nums = nums.sort((a,b) => a - b);

    if(nums.length < 4)
        return [];

    for(let i = 0;i < nums.length - 3;i++){
        for(let j = i + 1;j < nums.length - 2;j++){
            let start = j + 1,
                end = nums.length - 1;
            while(start < end){
                let val = nums[start] + nums[end] + nums[j] + nums[i];
                if(val < target){
                    start++;
                }
                else if(val > target){
                    end--;
                }
                else{
                    res.push([nums[i],nums[j],nums[start++],nums[end--]]);

                    while(start < end && nums[start] === nums[start - 1])
                        start++;

                    while(start < end && nums[end] === nums[end + 1])
                        end--;
                }
            }
            while(j < nums.length - 2 && nums[j] === nums[j + 1])
                j++;
        }
        while(i < nums.length - 3 && nums[i] === nums[i + 1])
                i++;
    }

    return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2],0));