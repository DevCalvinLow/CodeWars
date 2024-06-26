/*
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"


*/
function remove (s) {
  if(s[s.length - 1] == "!"){
      return s.slice(0,-1)
  } else {
    return s
  }  
}

function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}


function remove(s){
  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}