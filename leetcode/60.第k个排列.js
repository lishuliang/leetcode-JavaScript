/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let getPermutation = function(n, k) { 
    let nums = [];
    for(let i = 1;i <= n;i++){
        nums[i - 1] = i;
    }
    let index = 1;
    while(index < k){
        nextPermutation(nums);  //依靠下一个排列计算
        index++;
    }
    return nums.join('');
};

let nextPermutation = function(nums) {
    let  index = nums.length - 1;

    while(index >= 0 && nums[index] <= nums[index - 1])
        index--;
    
    if(index === 0)
        return nums = nums.sort((a,b) => a - b);

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

console.log(getPermutation(3,2));
