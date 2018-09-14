/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {  
    return haystack.indexOf(needle);
};

let haystack = "aaabbaa",
    needle = "bba";
console.log(strStr(haystack,needle));