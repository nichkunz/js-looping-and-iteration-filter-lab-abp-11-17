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
    if (name.toLowerCase(0,1) === fLetter.toLowerCase(0,1)){
      return true
    }
    else {
      return false
    }
  })
}