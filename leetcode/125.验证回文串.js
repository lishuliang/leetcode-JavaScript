/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    s = s.replace(/[\W]/g,'');
    s = s.toLocaleLowerCase();
    let _s = s.split('').reverse().join('');
    return s === _s;
};