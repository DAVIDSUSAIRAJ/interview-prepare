import "./App.css";

function App() {
  // OUTPUT
  // 1
  // 2 3 2
  // 3 4 5 4 3
  // 4 5 6 7 6 5 4
  // 5 6 7 8 9 8 7 6 5

  // for (let i = 1; i <= 5; i++) {
  //   if (i == 1) {
  //     console.log(i);
  //   } else {
  //     console.log("/n");
  //     let value = 0;
  //     for (let j = 1; j <= i; j++) {
  //       if (j == 1) {
  //         value = i;
  //         console.log(value);
  //       } else {
  //         value = value + 1;
  //         console.log(value);
  //       }
  //     }
  //     for (let j = 1; j < i; j++) {
  //       value = value - 1;
  //       console.log(value);
  //     }
  //   }
  // }
  // SECON METHOD THIS IS FUNNY
  // for (let i = 1; i <= 5; i++) {
  //   switch (i) {
  //     case 1:
  //       console.log("1");
  //       break;
  //     case 2:
  //       console.log("2 3 2");
  //       break;
  //     case 3:
  //       console.log("3 4 5 4 3");
  //       break;
  //     case 4:
  //       console.log("4 5 6 7 6 5 4");
  //       break;
  //     case 5:
  //       console.log("5 6 7 8 9 8 7 6 5");
  //   }
  // }

  // THIRD METHOD IN LOOP

  for (let i = 1; i <= 5; i++) {
    if (i == 1) {
      let arr = [];
      arr.push("1");
      let one = arr.join();
      console.log(one);
    }
    if (i == 2) {
      let arr2 = [];
      arr2.push("2 3 2");
      let two = arr2.join();
      console.log(two);
    }
    // THIS IS LITTL DIFFUCULT
    if (i == 3) {
      let arr3 = [];
      for (let i = 1; i <= 5; i++) {
        if (i == 1) {
          arr3.push(3);
        }
        if (i == 2) {
          arr3.push(4);
        }
        if (i == 3) {
          arr3.push(5);
        }
      }
      console.log(arr3.length);
      let joi = arr3.join(" ");
      console.log(joi);
    }
  }

  return (
    <div className="App">
      <h1>hello interview</h1>
    </div>
  );
}

export default App;
