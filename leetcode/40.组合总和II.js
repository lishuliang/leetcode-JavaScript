/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
            if(i > start && candidates[i] === candidates[i - 1])  //去重
                continue;
            if(target - candidates[i] >= 0){
                list.push(candidates[i]);
                helper(candidates,target - candidates[i],res,i + 1,list);
                list.pop();    //回退
            }
            else{
                break;
            }
        }
    }
};

console.log(combinationSum2([10,1,2,7,6,1,5],8));