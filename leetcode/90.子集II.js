/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = function(nums) {
    nums.sort();
    let res = [];
    let temp = [];
    solve(nums,res,temp,0);
    return res;
};

function solve(nums,res,temp,index) {
    if(temp.length <= nums.length){
        res.push(temp.slice());
    }
    if(index > nums.length){
        return;
    }
    for(let i = index;i < nums.length;i++){
        if(i > index && nums[i] === nums[i - 1])  //同一层中，前后两个不能相同
            continue;
        temp.push(nums[i]);
        solve(nums,res,temp,i + 1);
        temp.pop();
    }
}

console.log(subsetsWithDup([1,2,2]));