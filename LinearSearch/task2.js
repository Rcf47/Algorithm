
const findRightX = (seq, x) => {
  let answer = -1;
  seq.forEach((element, index) => {
    if (element === x) {
      answer = index
    }
  });
  return answer
}

module.exports = findRightX 
