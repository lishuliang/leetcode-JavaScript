/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let  index = nums.length - 1;

    while(index >=0 && nums[index] <= nums[index - 1])
        index--;
    
    if(index === 0)
        nums = nums.sort((a,b) => a - b);

    index--;

    for(let i = nums.length - 1;i >= index;i--){
        if(nums[index] < nums[i]){
            swap(nums,index,i);
            break;
        }
    }

    reverse(nums,index + 1);
    
    return nums;
};

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverse(arr,start){
    for(let i = start;i < arr.length - 1;i++){
        for(let j = arr.length - 1;j > i;j--){
            arr[j] < arr[i] && swap(arr,i,j);
        }
    }
}

console.log(nextPermutation([1,3,2]))