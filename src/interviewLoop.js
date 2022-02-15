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

let arrObj = [{ name: "a" }, { name: "b" }, { name: "c" }];
let result = arrObj.map((obj) => {
  return { ...obj, name: `${obj.name}1` };
});
console.log(result);

let arr = [12, "abc", "56", 0]; //12560
arr.splice(1, 1);
console.log(arr.join(""));

console.log(Math.random() * (100 - 10) + 10);

let st = "david is bad boy";
console.log(st.includes("b"));
console.log(st.match("bad"));

books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

let jsonObject = books.map(JSON.stringify);
let uniqueSet = new Set(jsonObject);
let uniqueAray = Array.from(uniqueSet).map(JSON.parse);
console.log(uniqueAray);

let arr = [2, 2, 2, 5, 6, 6, 4];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (newArr.indexOf(arr[i]) == -1 || arr[i] == "") {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

let uniqueArray = [];
let uniqueObject = {};
for (key in books) {
  let objTitle = books[key]["title"];
  console.log(objTitle);
  // uniqueObject[objTitle] = books[i];
  uniqueObject[objTitle] = books[key];
}
for (i in uniqueObject) {
  uniqueArray.push(uniqueObject[i]);
}
console.log(uniqueArray);

// *****
// ****
// ***
// **
// *
// ANS;

for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = i; j <= 5; j++) {
    star += "*";
  }
  console.log(star);
}

// SIMILARLY BUT NUMBER THATS ALL
// 1111
// 222
// 33
// 4
Output: for (let i = 1; i <= 4; i++) {
  let numpr = "";
  for (let j = i; j <= 4; j++) {
    numpr += i;
  }
  console.log(numpr);
}

// Output:

// 1234
// 234
// 34
// 4

//ANS

for (let i = 1; i <= 4; i++) {
  let numb = "";
  for (let j = i; j <= 4; j++) {
    numb += j;
  }
  console.log(numb);
}

// 12345
// 1234
// 123
// 12
// 1
// ANS;
for (let i = 5; i >= 1; i--) {
  let numb = "";
  for (let j = 1; j <= i; j++) {
    numb += j;
  }
  console.log(numb);
}

// *****
// *****
// *****
// *****
// *****
// ANS

for (let i = 1; i <= 5; i++) {
  let numb = "";
  for (let j = 1; j <= 5; j++) {
    numb += "*";
  }
  console.log(numb);
}

// *
// **
// ***
// ****
// *****
//ANS

for (let i = 1; i <= 5; i++) {
  let numb = "";
  for (let j = 1; j <= i; j++) {
    numb += "*";
  }
  console.log(numb);
}

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
