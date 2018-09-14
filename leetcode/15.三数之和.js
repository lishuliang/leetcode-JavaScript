/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    let resArr = [],
        index = 0;
    for(let i = 0;i < nums.length - 2;i++){
        for(let j = i + 1;j < nums.length - 1;j++){
            for(let m = j + 1;m < nums.length;m++){
                if(nums[i] + nums[j] + nums[m] === 0){
                    let temp = [nums[i],nums[j],nums[m]];
                    temp.sort((a,b) => a - b);
                    resArr[index++] = temp;
                }
            }
        }
    }

    let res = [];
    for(let i = 0;i < resArr.length;i++){
        res[i] = resArr[i].join(',');
    }

    res = res.filter((val,index,res) => {
        return res.indexOf(val) === index;
    })

    for(let i = 0;i < res.length;i++){
        res[i] = res[i].split(',').map(val => {
            return parseInt(val);
        })
    }

    return res;
};

var threeSum = function(nums) {   //固定第1个数字 ， 后面2个数字利用2个指针
    if(nums.length < 3)
        return [];

    const flag = 0;
    let res = [];
    nums = nums.sort((a,b) => a - b);

    for(let i = 0;i < nums.length - 2;i++){
        let start = i + 1;
        let end = nums.length - 1;
        while(start < end){
            let val = nums[start] + nums[end];
            if(nums[i] + val < flag){
                start++;
            }
            else if(nums[i] + val > flag){
                end--;
            }
            else{
                res.push([nums[i],nums[start],nums[end]]);
                start++;
                end--;
                while(start < end && nums[start] === nums[start - 1])  //去重(第二个数字)
                    start++;
                while(start < end && nums[end] === nums[end + 1])   //去重(第三个数字)
                    end--;
            }
        }
        while(i < nums.length - 1 && nums[i] === nums[i + 1])  //去重(第一个数字)
            i++;
    }
    return res;
}

console.log(threeSum([-2,0,0,2,2]));