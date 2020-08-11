const testVar = {};

function testFunc() {
  return "hi";
}

// Write a function called superbowlWin() in index.js that:

// Receives 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// Use find() to test each Object to see if the result is "W" — a win!
// superbowlWin() should return the year when the win occurred (if it occurred at all!). If no win is found, it should return, sadly, undefined
// Run the tests using learn.

const superbowlWin = (objArray) => {
  const winningObj = objArray.find((obj) => obj.result === "W");
  return (winningObj ? winningObj.year : undefined)
};
