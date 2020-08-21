const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let r = record.find((r) => r.result === "W")
  return r ? r.year : r
}
