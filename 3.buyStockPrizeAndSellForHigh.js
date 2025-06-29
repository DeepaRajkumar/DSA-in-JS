// Problem statement:
// Frequenctly asked question in all the company.
// Easy level 
//  Are given price array , each index represent stock price of ith day 
// maximize profit buy the stock one day and sell at different day. 
// return maximum pofit achive other wise return 0 
// =========================================================================

// solution 
// buy lowest stock for lowst price
// sell stock at the highest price from the day buy the lowest price
// consider the array price = [7,1,2,5,6]
// on the 1st day price of stock is 7 if sell any other different day give loss only 
// if buy on 2nd day , then price of stock is 1 and sell at 5th day , stock price is 6 => 6-1 = 5 
// 5 profit
// ================================================================================================== 

function getMaxProfit(price){
    let currPrice = price[0]; 
    let profit = 0
    for(let i = 0; i<= price.length; i++){
        if(price[i] < currPrice){
            currPrice = price[i];
        } 
        if(price[i]>currPrice){
            profit = Math.max(profit,price[i]-currPrice)
        }
    }
   return profit;
} 
let arr = [9,8,3,2,1,7,5,4]
// let arr = [6,6,6,6,6,6]
let result = getMaxProfit(arr) 
console.log("maxmium profit", result)