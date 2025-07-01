// 1 2 3 4 5 6 7
//  2 3 4 5 6 7
//   3 4 5 6 7 
//    4 5 6 7
//     5 6 7
//      6 7
//       7
//      6 7
//     5 6 7
//    4 5 6 7
//   3 4 5 6 7
//  2 3 4 5 6 7
// 1 2 3 4 5 6 7        

// solution  
// diving the problem two part upper triangle and lower triangle 
// keep it mind space after the number 
// if start with space then after there is no space
// eg: 3 two there is 2 space . there is no space after the space
// upper triangle logic
// first row - 0 space 
// 2nd row - 1 space
// 3rd row - 2 space 
// 4th row - 3 space 
// second triangle logic 
// 1 row - 6 space 
// 2nd row - 5 space 
// 3rd row - 4 space

// first i have written the code think i have written code with my own logic 
// but i am wrong. keen observation makes your perfect . first i thing i have written code for above , but now i have written for below pattern 

// 1 2 3 4 5 6 7
//  2 3 4 5 6 7
//   3 4 5 6 7 
//    4 5 6 7
//     5 6 7
//      6 7
//       7 
//       7
//      6 7
//     5 6 7
//    4 5 6 7
//   3 4 5 6 7
//  2 3 4 5 6 7
// 1 2 3 4 5 6 7    
  

function pattern(n){ 
    // upper triangle logic 
    for(let row = 1; row <= n ; row++){
        let space = row - 1
        let line = "" 
        for(let j=1 ; j<=space; j++){
            line += ' ' // important there is not space after space, change the pattern shape
        }   
        let num = row
        while(num<=n){
            line += num + " "; 
            num++;
        } 
        console.log(line)
    }  
    // second triangle logic  
    // upper triangle print until 7 
    // again lower triangle start to print with 7 
    for(let row =n; row >= 1; row--)
    {
        let space = row -1; 
        let line = '' ;
        for(let j =1; j<=space;j++){
            line += ' ';
        }
        for(let k = row; k<=n; k++){
            line += k+ " "
        }
        console.log(line)
    }
}



pattern(7) 

// second  solution // see sanket used different logic for lower triangle (fact it is not different soltion after observation , now for lower triangle i am going to writen my own way after understanding logic from sanket video) 
// dont always going with your logic. try to understand the other logic also  
console.log ("Different pattern")
function Timepattern(n){ 
    // upper triangle logic 
    for(let row = 1; row <= n ; row++){
        let space = row - 1
        let line = "" 
        for(let j=1 ; j<=space; j++){
            line += ' ' // important there is not space after space, change the pattern shape
        }   
        let num = row
        while(num<=n){
            line += num + " "; 
            num++;
        } 
        console.log(line)
    }   
    //lower triangle start with  6 7 and 5 space 
    // 5 6 7  with 4 space 
    // 4 5 6 7 with 3 space
    // for(let row = 1; row < n; row++) {
    for(let row = 1; row < n-1; row++) {
        let space = n-row -1 // 7 - 1-1 => 5 
        let line = "" 
        for (let j =1; j <= space; j++){
            line += " "
        } 
        // here i need value start with 6  
        let num = n - row ; // 7 -1 = 6 ; 7-2 = 6 
        for(;num<=n; num++){
            line += num+ " "
        }
        console.log(line)

    }
}
Timepattern(7);