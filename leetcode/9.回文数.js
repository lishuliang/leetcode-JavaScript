/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var n=String(x);
    var arr=n.split("");
    var arr1=arr.join("");
    var arr2=arr.reverse();
    return arr1===arr2.join("");
};