/* 121. 买卖股票的最佳时机II
    [7,1,5,3,6,4]
*/
function maxProfit(prices) {

    if(prices === null || prices.length === 0){
        return 0;
    }
  
    var maxProfits = 0;

    prices.forEach((per,index,prices) => {
        (per < prices[index + 1]) && (maxProfits += prices[index + 1] - per);
    },0);

    return maxProfits;
}

// console.log(maxProfit([1,2,3,4,5]));