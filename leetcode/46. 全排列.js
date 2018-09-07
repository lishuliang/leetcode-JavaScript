

var permute = function(nums) {
    var res = [];
    process(nums,0,res);
    //console.log(res);
    return res;
};

function process(arr,n,res){
    if(n === arr.length){
        let arr2 = arr.toString();
        let arr3 = [];
        arr2.split(',').forEach(element => {
            arr3.push(parseInt(element));
        });
        res.push(arr3);
    }
    else{
        for(let i = n;i < arr.length;i++){
            swap(arr,n,i);
            process(arr,n + 1,res);
            swap(arr,i,n);
        }
    }
}

function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

permute([1,2,3]);