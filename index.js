const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find((record) => {
    return record.result === "W"
  })
  if (win) {
    return win.year
  }
}