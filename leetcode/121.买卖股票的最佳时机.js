/* 121. 买卖股票的最佳时机
    [7,1,5,3,6,4]
*/
function maxProfit(prices) {
    
    if(prices !== null){

        var minPrice = prices[0]; //买入最小价格
        var maxProfits = 0;  //最大利润
        
        /* for(let i=0;i<prices.length;i++){
            if(prices[i]<minPrice){
                minPrice = prices[i];
            }
            else{
                maxProfits = Math.max(maxProfits,(prices[i]-minPrice));
            }
        } */
        
        prices.forEach(price => {
            price < minPrice ? minPrice = price :  maxProfits = Math.max(maxProfits,price-minPrice);
        });
       
        return maxProfits;
    }

}

console.log(maxProfit([7,1,5,3,6,4]));