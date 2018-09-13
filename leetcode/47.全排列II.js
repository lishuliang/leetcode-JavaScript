/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function(nums) {
    let res = [];
    nums.sort((a,b) => a - b);
    process(nums,0,res);
    return res;
};

function process(arr,n,res){
    if(n === arr.length){
        res.push(arr.slice());
        return;
    }
    for(let i = n;i < arr.length;i++){
        if(i > n && arr[i] === arr[i - 1])
            continue;
        swap(arr,n,i);
        process(arr,n + 1,res);
        swap(arr,i,n);
    }
}

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(permuteUnique([1,1,2,]))