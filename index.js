const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrObjs){
  let obj = arrObjs.find((obj) => obj.result === "W")
  return obj ? obj.year : obj
}