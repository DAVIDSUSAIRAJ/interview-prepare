function generatePyramid(n) {
    let pyramid = "  ";
    for (let i = 1; i <= n; i++) {
      let space = "";
      let spaceCount = n - i;
      for (let s = 1; s <= spaceCount; s++) {
        space += " ";
      }
      if (i == 1) {
        pyramid += space + i + "\n";
      } else {
        let incrementNo = "";
        let decrementNo = "";
        for (let j = i; j <= i + i - 1; j++) {
          incrementNo += " " + j;
        }
  
        let lastNumber = incrementNo.charAt(incrementNo.length - 1);
        for (let k = lastNumber; k > i; k--) {
          decrementNo += k - 1 + " ";
        }
        pyramid += space + incrementNo + " " + decrementNo + "\n";
      }
    }
    return pyramid;
  }
  let result = generatePyramid(5);
  console.log(result);