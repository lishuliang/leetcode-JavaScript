/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {  
    return haystack.indexOf(needle);
};

let haystack = "aaabbaa",
    needle = "bba";
console.log(strStr(haystack,needle));