/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    let n=String(x);
    let arr=n.split("");
    let arr1=arr.join("");
    let arr2=arr.reverse();
    return arr1===arr2.join("");
};