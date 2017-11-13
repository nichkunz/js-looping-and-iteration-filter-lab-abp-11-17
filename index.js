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

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(fLetters){
    if (name.toLowerCase() === fLetter.toLowerCase()){
      return true
    }
    else {
      return false
    }
  })
}
