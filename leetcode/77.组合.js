/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let temp = [];
    solve(n,k,res,temp,1);
    return res;
};

function solve(n,k,res,temp,index) {
    if(temp.length === k){
        res.push(temp.slice());
        return;
    }
    if(index > n){
        return;
    }
    for(let i = index;i <= n;i++){
        temp.push(i);
        solve(n,k,res,temp,i + 1);
        temp.pop();
    }
}

console.log(combine(4,2));