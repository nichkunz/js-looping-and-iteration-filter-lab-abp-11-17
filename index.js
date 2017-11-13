// Code your solution in this file


function findMatching(drivers, name) {
  return drivers.filter(function(driver){
    if (name === driver){
      return true
    }
    else {
      return false
    }
  })
}
//drivers: "Bobby", "Sally"
