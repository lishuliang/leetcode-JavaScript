/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {  //回溯法
    let res = [];
    if(candidates.length === 0)
        return res;
    candidates = candidates.sort((a,b) => a - b);
    helper(candidates,target,res,0,[]);
    return res;
};

function helper(candidates,target,res,start,list) {
    if(target < 0)
        return;
    else if(target === 0){
        let temp = list.slice(0);
        res.push(temp);   
        return;
    }
    else{
        for(let i = start;i < candidates.length;i++){
            if(target - candidates[i] >= 0){
                list.push(candidates[i]);
                helper(candidates,target - candidates[i],res,i,list);
                list.pop();   //回退
            }
            else{
                break;
            }
        }
    }
}

console.log(combinationSum([2,3,6,7],7));