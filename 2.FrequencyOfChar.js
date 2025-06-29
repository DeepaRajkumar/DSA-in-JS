// find the no of occurance of the 
// using js object

function frequencyOfChar(str){
  let freqMap={}; 
  for(var singleChar of str){
     if(freqMap[singleChar]){ 
        freqMap[singleChar] += 1;

     }else{
        freqMap[singleChar] = 1;
     }

  } 
  return freqMap

} 

let result = frequencyOfChar("athulya");
console.log("frequency character result",result);