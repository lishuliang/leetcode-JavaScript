/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function(path) {
    let list = path.split('/');
    let array = [];
    for(let i = 0,len = list.length; i < len; i++){
        let cur = list[i];
        if(cur === '' || cur === '.'){
            continue;
        }
        if(cur === '..'){
            array.pop();
        }else{
            array.push(cur);
        }
        console.log(array);
    }
    return '/' + array.join('/')
};

console.log(simplifyPath("/b/../../c/"));