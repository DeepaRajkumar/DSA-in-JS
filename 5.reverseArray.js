// Reverse the array without creating new array
// input arr = [5,9,1,8,2,3]
//output arr = [3,2,8,1,9,5]

var result = function ReverseArray(arr){
    let i = 0; 
    let j= arr.length-1; 
    while(i<j){
        let temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
        i++; 
        j--;
    }  
    return arr
} 
let a= [5,9,1,8,2,3]
console.log(result(a))