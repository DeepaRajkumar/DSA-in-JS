// find the no of occurance of the 
// using js object

function frequencyOfChar(str){
  let frequency_obj={}; 
  for(var single_char of str){
     if(frequency_obj[single_char]){ 
        frequency_obj[single_char] += 1;

     }else{
        frequency_obj[single_char] = 1;
     }

  } 
  return frequency_obj

} 

let result = frequencyOfChar("athulya");
console.log("frequency character result",result);