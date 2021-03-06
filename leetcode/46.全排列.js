/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
    let res = [];
    process(nums,0,res);
    return res;
};

function process(arr,n,res){
    if(n === arr.length){
        res.push(arr.slice());
        return;
    }
    for(let i = n;i < arr.length;i++){
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

console.log(permute([1,2,3,]));