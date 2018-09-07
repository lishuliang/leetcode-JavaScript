/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) { //直接在num1操作，不占用额外空间
    let len = m + n
        a = m - 1,
        b = n - 1;
    while(a >= 0 && b >= 0){
        if(nums2[b] >= nums1[a]){
            nums1[--len] = nums2[b--];
        }
        else{
            nums1[--len] = nums1[a--];
        }
    }
    while(a >= 0){
        nums1[--len] = nums1[a--];
    }
    while(b >= 0){
        nums1[--len] = nums2[b--];
    }
    return nums1;
};

var merge = function(nums1, m, nums2, n) { //占用额外空间
    let res = []
        a = 0,
        b = 0;
    while(a < m && b < n){
        nums1[a] <= nums2[b] ? res.push(nums1[a++]) : res.push(nums2[b++]);
    }
    while(a < m){
        res.push(nums1[a++]);
    }
    while(b < n){
        res.push(nums2[b++]);
    }
    nums1 = res;
    return nums1;
}

let nums1 = [1,2,3,0,0,0], 
    m = 3,
    nums2 = [2,5,6],
    n = 3;
console.log(merge(nums1,m,nums2,n));