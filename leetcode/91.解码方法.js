/**
 * @param {string} s
 * @return {number}
 */
let numDecodings = function(s) {
    if(s.length === 0 || (s.length > 1 && s[0] === 1))
        return 0;
    let dp = [];
    dp[0] = 1;
    for(let i = 1;i <= s.length;i++){
        dp[i] = (s[i - 1] === '0') ? 0 : dp[i - 1];
        if (i > 1 && (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6'))) {
            dp[i] += dp[i - 2];
        }
        //console.log(i,dp);
    }
    return dp[s.length];
};

console.log(numDecodings('22228'));