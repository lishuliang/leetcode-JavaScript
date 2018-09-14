/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function(str) {
    let result = isNaN(parseInt(str)) ? 0 : parseInt(str);
    result = result < -Math.pow(2,31) ? -Math.pow(2,31) : result;
    result = result > Math.pow(2,31) - 1 ? Math.pow(2,31) - 1 : result;
    return result;
};

console.log(myAtoi('42'));