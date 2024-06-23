/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let calcBMI = weight / Math.pow(height,2)
  if (calcBMI <= 18.5) {
    return "Underweight"
  } else if (calcBMI <= 25) {
    return "Normal"
  } else if (calcBMI <= 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}


function bmi(weight, height) {

  let calcBMI = weight/Math.pow(height,2)
  return calcBMI < 18.5 ? "Underweight" : calcBMI<= 25 ? "Normal" : calcBMI<= 30 ? "Overweight" : "Obese"
}