const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(games) {
  let answer = games.find(game => (game.result === "W"));
  if (answer) {
    return answer.year
  } else {
    return undefined
  }
} 

