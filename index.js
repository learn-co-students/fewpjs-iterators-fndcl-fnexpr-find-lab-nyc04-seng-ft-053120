

superbowlWin = (array) =>{
  let results = array.find(array => array.result === "W")
    return results ? results.year : undefined
}
