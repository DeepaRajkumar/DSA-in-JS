// 29-6-2025

// problem Statment: 
// Given an array which only contains 0 & 1. The data is shuffled randomly. 
// write a functio that can rearrange the data such that all 0's are present by 1's 
// EventTarget. arr=[1,0,0,0,0,1,0,0,1]
// arr = [0,0,0,0,0,1,1,1,1]
// dont create new array 
// condition -> do the rearrangement by ready access the whole array only once (single pass) 

// ================================================================================================

// solution:
// using two pointer i,j 
// i point to first index and j point to last index. 
// concentrate on i . 
// if i value 1 then 
//    swap i,j 
//      then j-- 
// else if i value 0 then 
//      i++ ;      
// this is called two pointer approach
// ====================================================  

// my first try solution after learn the logic
let arr= [1,0,1,0,0,0,1,0,0,1] 
console.log("current input array:",arr)
let i = 0 ;
let j= arr.length-1; 
console.log("index of i",i)
console.log("index of j",j)
while((i<= arr.length-1)&& (j>= 0)) 
{
if(arr[i]==1){
    let a= arr[i]
    arr[i] = arr[j]
    arr[j] = a
    j--
}
if(arr[i] ==0){
    i++
}
if(i==j){
    break;
}

} 
console.log("final array",arr) 

// ================================================ 
// write the code simple and cleaner way 
let arr1 = [1,0,1,0,0,0,1,0,0,1]; 
console.log("input array", arr1);
let first_pointer = 0 ;
let second_pointer = arr1.length-1; 
while(first_pointer < second_pointer) 
    {
        if(first_pointer[i] == 0) 
            i++ 
        
    } 
