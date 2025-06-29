// are given two integer array num1 and num2  non decreasing order, n& m are no of array elments 
// num1= [m+n] ; contain m elements and n elements with 0 ;  
// num1 = [1,2,3,0,0,0] and num= [2,5,6]

// soltuion: 
// going to use two pointer method 
// let num1 = [1,2,3,0,0,0]
// let num2 = [2,5,6]  
let n = 4
let m =4 
let num1=[2,5,6,7,0,0,0,0]
let num2=[1,2,4,5]
let i =0 
let j =0 
let num = n
console.log("before sort the array", num1)
while(i<num1.length){ 
   if ((i>= num) ||(num2[j]<num1[i])){
        num1.splice(i,0,num2[j])  
        j++ 
        i++ 
        num++ 
        num1.pop()
    } else{
        i++
    }
    
} 
console.log(num1)
// ==================================================================================================== 

// sloution proposed by sanket: 
//  num1=[1,3,4,8]  num2 = [3,5,6] 
//  result =[m+n] = [0,0,0,0,0,0,0]   
//  m = 4 n = 3  
// do comparison until equal no of length , for extra elements push to result array (already in ascending order) 
// i = 0, j= 0 k=0
// while(i<m&& j<n )  
//     if(num[i]<num[j]){
//         result[k]=num1[i] 
//         i++; 
//         k++; 
//     }else{ //num[j]<num[i]
//        result[k] = num2[j]
//        j++; 
//        k++;
//     } 
// while(i<m){
//         result[k] = num1[i]
//         k++; 
//         i++
// }    
// while(j<n){
//     result[k] = num2[j]
//     k++
//     j++
// }
 
var merge = function(num1, m, num2, n) { 
    result= Array(m+n).fill(0) 
    let i=0,j=0,k=0;
    while((i<m) && (j <n)){
        if(num1[i]<num2[j]){
            result[k] = num1[i]
            i++; 
            k++;
        }else{
            result[k] = num2[j]
            j++; 
            k++; 
        }
    }
    while(i<m){
        result[k] = num1[i]
        i++; 
        k++;
    }
    while(j<n){
        result[k] =num2[j]
        j++; 
        k++ 
    }
    for(let i =0;i<result.length;i++){
        num1[i] = result[i]
    } 
    return num1
    
}; 
console.log(merge([1,4,6,7],4,[2,4,6,7,8],5))