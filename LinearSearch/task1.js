const findx = (seq, x) => {
  let answer = -1;
  for (let i = 0; i <= seq.length; i++) {
    if (answer === -1 && seq[i] === x) {
      answer = i
    }
  }
  return answer;
}

console.log(findx([1, 2, 3], 2))
module.exports = findx;
