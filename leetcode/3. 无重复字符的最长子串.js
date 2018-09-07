/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {  //滑动窗口思路
    let res = '',
        len = 0;
    for(let i = 0;i < s.length;i++){
        let str = s[i];
        let index = res.indexOf(str);
        if(index === -1){
            res += str;
            len = Math.max(len,res.length);
        }
        else{
            res = res.substr(index + 1) + str;
        }
    }
    return len;
};

console.log(lengthOfLongestSubstring(''));