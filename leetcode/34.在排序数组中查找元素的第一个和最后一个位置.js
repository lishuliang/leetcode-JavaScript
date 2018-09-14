/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {  //二分查找
    let start = 0,
        end = nums.length,
        index = -1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target){
            index = mid;
            break;
        }
        else if(nums[mid] < target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }

    if(index === -1){
        return [-1,-1];
    }
    else{
        let first = index,
            last = index;
        while(nums[first - 1] === target)
            first--;
        while(nums[last + 1] === target)
            last++;
        return [first,last];
    }
};

console.log(searchRange([1,3],1));