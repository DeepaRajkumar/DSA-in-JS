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