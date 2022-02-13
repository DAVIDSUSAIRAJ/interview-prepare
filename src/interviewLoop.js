// LOOP FIRST
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`     1`);
  }
  if (i == 2) {
    console.log(`   2 3 2`);
  }
  if (i == 3) {
    console.log(`  3 4 5 3`);
  }
  if (i == 4) {
    console.log(` 4 5 6 7 6 5 4`);
  }
  if (i == 5) {
    console.log(`5 6 7 8 9 8 7 6 5`);
  }
}
// LOOP SECOND

for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(i);
  } else {
    let value = 0;
    for (let j = 1; j <= i; j++) {
      if (j == 1) {
        value = i;
        console.log(value);
      } else {
        value = value + 1;
        console.log(value);
      }
    }
    for (let j = 1; j < i; j++) {
      value = value - 1;
      console.log(value);
    }
  }
}

// LOOP 3
function generatePyramid(n) {
  let pyramid = " ";

  for (let i = 1; i <= n; i++) {
    let row = "";
    let space = "";
    let spaceCount = n - i;

    for (let s = 1; s <= spaceCount; s++) {
      space += " ";
    }

    if (i === 1) {
      pyramid = pyramid + " " + space + i + "\n";
    } else {
      for (let j = i; j <= i + i - 1; j++) {
        row = row + " " + j;
      }
      pyramid +=
        space + row + row.split("").reverse().splice(1).join("") + "\n";
    }
  }
  return pyramid;
}
console.log(generatePyramid(5));

// FINAL RESULT IN LOOP CORRECTLY
console.log("Hello, World!");
function generatePyramid(n) {
  let pyramid = " ";
  for (let i = 1; i <= n; i++) {
    let space = " ";
    let spaceCount = n - i;
    let row = "";
    for (let s = 1; s <= spaceCount; s++) {
      space += " ";
    }

    if (i == 1) {
      pyramid += space + " " + i;
    } else {
      for (let j = i; j <= i + i - 1; j++) {
        row += " " + j;
      }
    }

    pyramid += space + row + row.split("").reverse().splice(1).join("") + "\n";
  }

  return pyramid;
}
let result = generatePyramid(5);
console.log(result);
