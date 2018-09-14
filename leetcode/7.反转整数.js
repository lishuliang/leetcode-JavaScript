/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    let resultArr = [];
    let str = '' + x;
    for(let i = str.length - 1;i >= 0;i--){
        resultArr.push(str[i]);
    }

    if(str[0] === '-'){          //将负号提到开头
        let minus = resultArr.pop();
        resultArr.unshift(minus);
    }

    let resultNumber = parseInt(resultArr.join(''));

    if(resultNumber <= Math.pow(-2,31) || resultNumber >= Math.pow(2,31) - 1 ){
        return 0;
    }

    return resultNumber;
};

console.log(reverse(-120));