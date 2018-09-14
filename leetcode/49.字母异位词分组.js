/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let obj = {};
    let res = [];

    for(let i = 0;i < strs.length;i++){
        let temp = strs[i].split('').sort().join('');
        if(!obj[temp]){
            obj[temp] = [];
        }
        obj[temp].push(strs[i]);
    }

    for(let key in obj){
        res.push(obj[key]);
    }
    return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));