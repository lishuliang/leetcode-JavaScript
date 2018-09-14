/**
 * @param {string} s
 * @return {string}
 */
/* var longestPalindrome = function(s) { //暴力
    if(s.length < 2)
        return s;
    let len = 0,
        result = '';
    for(let i = 0;i < s.length;i++){
        let res = '';
        for(let j = i;j < s.length;j++){
            res += s[j];
            if(isPalindrome(res)){
                len = res.length > len ? res.length : len;
                result = res.length > result.length ? res : result;
            }
        }
    }
    return result;
};

function isPalindrome(str){  //判断是否为回文串
    if(str.length === 1)
        return true;
    let first,
        rest;
    if(str.length % 2 ===0){
        let half = str.length / 2;
        first = str.substr(0,half);
        rest = str.substr(half);
    }
    else{
        let half = Math.floor(str.length / 2);
        first = str.substr(0,half);
        rest = str.substr(half + 1);
    }
    return first === rest.split('').reverse().join('');
} */

let longestPalindrome = function(s) { //动态规划
    if(s.length <= 1)
        return s;
    let len = s.length;
        arr = [],
        max = 1,
        maxIndex = 0;

    for(let i = 0;i < len;i++){  // 判断'a'形式
        arr[i] = [];
        arr[i][i] = true;
        maxIndex = i;
    }

    for(let i = 0;i < len - 1;i++){ // 判断'aa'形式
        if(s[i] === s[i + 1]){
            arr[i][i + 1] = true;
            max = 2;
            maxIndex = i;
        }
    }

    for(let length = 3;length <= len;length++){
        for(let i = 0;i < len - length + 1;i++){
            let j = i + length - 1;
            if(s[i] === s[j] && arr[i+1][j-1]){
                max = length;
                maxIndex = i;
                arr[i][j] = true;
            }
        }
    }
    return s.substr(maxIndex,max);
}

let longestPalindrome = function(s) {  //Manacher 算法
    let str = '#' + s.split('').join('#') + '#';
    let RL = [],
        pos = 0,
        MaxRight = 0,
        MaxLen = 0;
    
    for(let i = 0;i < str.length;i++){
        RL[i] = 0;
    }

    for(let i = 0;i < str.length;i++){
        RL[i] = i < MaxRight ? Math.min(RL[2 * pos - 1],MaxRight - i) : 1;

        while (i - RL[i] >= 0 && i + RL[i] < str.length && str[i - RL[i]] === str[i + RL[i]])
            RL[i] += 1;

        if(RL[i] + i - 1 > MaxRight){
            MaxRight = RL[i] + i - 1;
            pos = i;
        }

        MaxLen = Math.max(MaxLen, RL[i]);     
    }

    return MaxLen-1;
}

console.log(longestPalindrome("cbbc"));
// console.log(isPalindrome('a'));