/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
  let count = 0
  for ( let i = 0; i < x.length; i++) {
    if (x[i] == "good") {
      count += 1
    } 
  }
  
  if (count <= 0) {
    return "Fail!"
  } else if (count > 2) {
    return "I smell a series!"
  } else if (count <= 2) {
    return "Publish!"
  }
}


const well = x => {
  const good_count = x.filter(x => x == 'good').length;
  return good_count < 1 ? 'Fail!' : 
         good_count < 3 ? 'Publish!' : 'I smell a series!';
}