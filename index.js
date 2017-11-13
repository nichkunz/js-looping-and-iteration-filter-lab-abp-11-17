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
  return drivers.filter(function(fLetter){
    if (name.toLowerCase.slice(beginIndex[, endIndex]) === fLetter.toLowerCase.slice(beginIndex[, endIndex]){
      return true
    }
    else {
      return false
    }
  })
}
