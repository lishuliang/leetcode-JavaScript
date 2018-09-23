/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
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
        temp.push(nums[i]);
        solve(nums,res,temp,i + 1);
        temp.pop();
    }
}

console.log(subsets([1,2,3]));