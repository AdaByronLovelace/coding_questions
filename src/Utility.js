function GetRandomPositiveIntegersArray(num) {
  let arr = []
  for (let i=0; i<num; i++) {
    arr[i] = GetRandomNumber(0,1000)
  }
  return arr
}

function GetRandomIntegersArray(num) {
  let arr = []
  for (let i=0; i<num; i++) {
    arr[i] = GetRandomNumber(-500,500)
  }
  return arr
}

// Math.random is inclusive of zero but not one
function GetRandomNumber(min, max) {
  return Math.ceil(Math.random()*max)+min
}
