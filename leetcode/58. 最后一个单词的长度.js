/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    arr = arr.filter(val => {
        return val !== '';
    })
    return arr.length === 0 ? 0 : arr[arr.length - 1].length;
};

/* var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    console.log(arr);
    return arr[arr.length - 1].length;
}; */

console.log(lengthOfLastWord(" "));