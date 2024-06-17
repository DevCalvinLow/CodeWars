/*
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.

*/

function stairsIn20(s){
  let sum = 0
  for (let i = 0; i < s[0].length; i++) {
    sum += s[0][i] 
  }
  
    for (let i = 0; i < s[1].length; i++) {
    sum += s[1][i] 
  }
  
    for (let i = 0; i < s[2].length; i++) {
    sum += s[2][i] 
  }
  
    for (let i = 0; i < s[3].length; i++) {
    sum += s[3][i] 
  }
  
    for (let i = 0; i < s[4].length; i++) {
    sum += s[4][i] 
  }
  
    for (let i = 0; i < s[5].length; i++) {
    sum += s[5][i] 
  }
  
    for (let i = 0; i < s[6].length; i++) {
    sum += s[6][i] 
  }
  
  
  return sum * 20
}

function stairsIn20(s){
  let stairs = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      stairs += s[i][j];
    }
  }
  return stairs * 20;
}