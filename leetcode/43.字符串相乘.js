/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = function(a, b) {
    if(a === 0 || b === 0){
        return '0';
    }
    var str1,str2,len1,len2,
        result = [];

    str1 = a.split("").reverse(); 
    str2 = b.split("").reverse();
    len1 = str1.length;
    len2 = str2.length;
    //因为要在下一步做累加，如果不初始化为0，result[]中的值会变为NaN
    //因为未初始化的数组中的值为undefined
    for(var i = 0;i < len1;i++)
        for(var j = 0;j < len2;j++)
            result[i + j] = 0;
    for(var i = 0;i < len1;i++)
        for(var j = 0;j < len2;j++)
            //根据乘法的手动计算方式，在上下相同位上会有相加
            result[i + j] += parseInt(str1[i]) * parseInt(str2[j]);

    var n = result.length;
    
    for(var k = 0;k < n;k++)
    {
        var temp = result[k];
        if(temp >= 10)
        {
            if(k + 1 < n){
                result[k] = temp % 10;
                //JS中的"/"不是除法取整，会取得小数，所以要用Math.floor()
                result[k + 1] +=  Math.floor(temp / 10);
            }
            else{
                result[k] = temp % 10;
                //JS中的"/"不是除法取整，会取得小数，所以要用Math.floor()
                result[k + 1] = Math.floor(temp / 10);
            }
        }
    }
    return result.reverse().join("");
};