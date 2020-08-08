function superbowlWin(records) {
  const match = records.find(record => record.result == "W")
  if (match != undefined) {
    return match.year;
  } else {
    return undefined
  }
}
