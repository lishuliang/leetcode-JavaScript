
let removeDuplicates = function(nums) {
    if(nums.length === 0)
        return 0;
    let number = 0;
    for(let i = 0;i < nums.length;i++){
        if(nums[i] !== nums[number]){
            nums[++number] = nums[i];
        }
    }
    number++;
    return number;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));