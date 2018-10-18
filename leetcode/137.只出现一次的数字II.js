/**
 * @param {number[]} nums
 * @return {number}
 */

/* let singleNumber = function (nums) {
    nums = nums.sort();
    let len = nums.length;
    if (nums[0] !== nums[1])
        return nums[0];
    if (nums[len - 1] !== nums[len - 2])
        return nums[len - 1];
    for (let i = 3; i < len - 3; i += 3) {
        if (nums[i] !== nums[i + 1])
            return nums[i];
    }
}; */
let singleNumber = function (num) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let flag = 1 << i;

        let count = 0;
        for (let j = 0; j < num.length; j++) {
            if ((flag & num[j]) !== 0) {
                count++;
            }
        }

        if (count % 3 === 1)
            result |= flag;
    }
    return result;
};