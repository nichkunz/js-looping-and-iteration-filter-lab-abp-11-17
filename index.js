// Code your solution in this file


function findMatching(drivers, name) {
  return drivers.filter(function(driver){
    if (name.toLowerCase() === driver.toLowerCase()){
      return true
    }
    else {
      return false
    }
  })
}

function fuzzyMatch(drivers, fLetters) {
  let lengthOfName = fLetters.length; 
  return drivers.filter(function(name){
    if (name.toLowerCase() === fLetters.toLowerCase()){
      return true
    }
    else {
      return false
    }
  })
}
