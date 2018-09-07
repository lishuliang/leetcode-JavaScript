/* 213. 打家劫舍 II */
function rob(nums) { //分为2段 1-(n-1) 2-n
    var result = [],
        result2 = [],
        arr = nums.slice(0,nums.length-1),
        arr2 = nums.slice(1,nums.length);
    

    if(nums.length === 0)
        return 0;
    if(nums.length === 1)
        return nums[0];

    
    result[0] = arr[0];
    result[1] = Math.max(arr[0],arr[1]);

    for(let i=2;i<arr.length;i++){
        result[i] = Math.max(result[i-1],result[i-2]+arr[i]);
    }


    result2[0] = arr2[0];
    result2[1] = Math.max(arr2[0],arr2[1]);

    for(let i=2;i<arr2.length;i++){
        result2[i] = Math.max(result2[i-1],result2[i-2]+arr2[i]);
    }

    return Math.max(result[arr.length-1],result2[arr2.length-1]);
};

console.log(rob([5,1,1,4]));