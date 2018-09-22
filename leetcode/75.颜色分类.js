/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) { //三路快排方案
    let l = 0,
        r = nums.length - 1,
        less = l - 1,
        cur = l,
        more = r + 1;
    while(cur < more){
        if(nums[cur] < 1){
            swap(nums,++less,cur++);
        }
        else if(nums[cur] > 1){
            swap(nums,cur,--more);
        }
        else{
            cur++;
        }
    }   
    return nums;
};
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(sortColors([2,0,2,1,1,0]));

/* var sortColors = function(nums) { 
    let arr = [0,0,0];
    for(let i = 0;i < nums.length;i++){
        arr[nums[i]]++;
    }
    for(let i = 0;i < nums.length;i++){
        if(i < arr[0]){
            nums[i] = 0;
        }
        else if(i < arr[0] + arr[1]){
            nums[i] = 1;
        }
        else{
            nums[i] = 2;
        }
    }
    return nums;
}; */