/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(arr) {
    if(arr.length === 0)
        return [];
    if(arr.length === 1)
        return arr;
    arr.sort(function(a,b){
        return a.start - b.start;
    });
    var res = [];
    res.push(arr[0]);
    for(let i = 1;i < arr.length;i++){
        var temp = res.pop();
        if(arr[i].end <= temp.end){
            res.push(temp);
        }
        else if(arr[i].start > temp.end){
            res.push(temp);
            res.push(arr[i]);
        }
        else if(arr[i].end > temp.end){
            temp.end = arr[i].end;
            res.push(temp);
        }    
    }
    return res;
};