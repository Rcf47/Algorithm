const findx = (seq, x) => {
  let answer = -1;
  for (let i = 0; i <= seq.length; i++) {
    if (answer = -1 && seq[i] === x) {
      answer = i
    }
  }
  return answer;
}
