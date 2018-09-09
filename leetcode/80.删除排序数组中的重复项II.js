
var removeDuplicates = function(nums) {
    if(nums.length === 0)
        return 0;
    var number = 0;
    var isTwice = false;
    for(let i = 0;i < nums.length;i++){
        if(i !== nums.length - 1 && nums[i] === nums[i + 1]){
            if(!isTwice){
                isTwice = true;
                nums[number++] = nums[i];
            }
        }
        else{
            isTwice = false;
            nums[number++] = nums[i];
        }
    }
    return number;
};

console.log(removeDuplicates([0,0,1,1,1,2,3,3,4]));