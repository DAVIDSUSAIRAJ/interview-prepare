import { useState, useEffect } from "react";

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

  // for (let i = 1; i <= 5; i++) {
  //   if (i == 1) {
  //     let arr = [];
  //     arr.push("1");
  //     let one = arr.join();
  //     console.log(one);
  //   }
  //   if (i == 2) {
  //     let arr2 = [];
  //     arr2.push("2 3 2");
  //     let two = arr2.join();
  //     console.log(two);
  //   }
  // THIS IS LITTLe defucult loop
  //   if (i == 3) {
  //     let arr3 = [];
  //     for (let i = 1; i <= 5; i++) {
  //       if (i == 1) {
  //         arr3.push(3);
  //       }
  //       if (i == 2) {
  //         arr3.push(4);
  //       }
  //       if (i == 3) {
  //         arr3.push(5);
  //       }
  //     }
  //     console.log(arr3.length);
  //     let joi = arr3.join(" ");
  //     console.log(joi);
  //   }
  // }
  // let name = "david";
  // console.log(name);
  // let ar = [2, 4, 6];
  // console.log(ar);

  // LETTER REVERSING

  // let text = "How are you doing today?";
  // let myArray = text.split(" ");
  // console.log(myArray);
  // let revr = myArray.reverse();

  // let rverse = revr.join("");
  // let rverseVal = rverse.split("");
  // console.log(rverseVal);
  // let newArr = [];
  // rverseVal.forEach((val, ind) => {
  //   if (!newArr.includes(val)) {
  //     newArr.push(val);
  //   }
  // });
  // console.log(newArr);
  // let main = newArr.reverse();
  // let mainResult = main.join("");
  // console.log(mainResult);
  // END REVERSING ARRAY

  // {...obj} deep copy only primitive types
  // Object.assign(objName) SHALLOW COPY
  // Object.assign({},objName); deep copy
  // JSON.parse(JSON.stringify(objName)) deep copy
  // let x = new String("davdi");
  // Boolean(true);
  // new Boolean(true)
  // let y = new Boolean(false);
  // console.log(y);
  // console.log(x);
  // let no = 5;
  // console.log(no);

  // let foo = ["le1", "le2", "le3", "le4"];
  // console.log(foo.length);
  // console.log(foo.length);

  // let arr = [[4,6],[5,6]];
  // let newArr = [];
  // arr.forEach((arrvalue)=>{
  //  newArr = newArr.concat(arrvalue);

  // })
  // console.log(newArr);
  //  let resulut = newArr.reduce((previousValue,currentValue)=>{
  //     return previousValue+currentValue;
  // },9);
  // console.log(resulut);
  // let arrObj = [{x:6},{x:5}];
  // let newArr2 = [];
  // let result2 = arrObj.forEach((ao)=>{
  // newArr2.push(ao.x || ao.y );
  // });
  // console.log(newArr2);
  // newArr2.reduce((preValue,currentValue)=>{
  //  console.log(preValue+currentValue);
  // })
  // let re = arrObj.reduce((preVal,curVal)=>{

  //    return preVal+curVal.x;
  // },0);
  // console.log(re);

  // RAVANAN DEVELOPER
  // function generatePyramid(n) {
  //   let pyramid = "";
  //   // i defines row number if n = 5, then i go from 1 to 5
  //   for (let i = 1; i <= n; i++) {
  //     let row = "";
  //     let spaceCount = Math.ceil((n * 2) / 2 - i);

  //     let space = "";
  //     // s defines the space to put before values for each row
  //     for (let s = 1; s <= spaceCount; s++) {
  //       space += " ";
  //     }
  //     if (i === 1) {
  //       pyramid += space + i + "\n";
  //     } else {
  //       let temp = 0;
  //       // j defines the number to print in each row
  //       // row 2 => 2 + 2 - 1 => 3 => in second row we need 3 numbers to display
  //       for (let j = i; j <= i + i - 1; j++) {
  //         if (j > 9) {
  //           if (temp > 9) {
  //             temp = 0;
  //           }
  //           temp++;
  //           row += temp;
  //         } else {
  //           row += j;
  //         }
  //       }
  //       pyramid +=
  //         space + row + row.split("").reverse().splice(1).join("") + "\n";
  //     }
  //   }
  //   return pyramid;
  // }

  // console.log(generatePyramid(5));

  // pyramidWithJS(1);
  // RAAVANAN DEVELOPER
  // function generatePyramid(n) {
  //   let pyramid = "";
  //   // i defines row number if n = 5, then i go from 1 to 5
  //   for (let i = 1; i <= n; i++) {
  //     let row = "";
  //     let spaceCount = n - i;
  //     let space = "";
  //     // s defines the space to put before values for each row
  //     for (let s = 1; s <= spaceCount; s++) {
  //       space += " ";
  //     }
  //     if (i === 1) {
  //       pyramid += "\n" + space + i + "\n";
  //     } else {
  //       let temp = 0;
  //       // j defines the number to print in each row
  //       // row 2 => 2 + 2 - 1 => 3 => in second row we need 3 numbers to display
  //       for (let j = i; j <= i + i - 1; j++) {
  //         if (j > 9) {
  //           if (temp > 9) {
  //             temp = 0;
  //           }
  //           temp++;
  //           row += temp;
  //         } else {
  //           row += j;
  //         }
  //       }
  //       pyramid +=
  //         space + row + row.split("").reverse().splice(1).join("") + "\n";
  //     }
  //   }
  //   return pyramid;
  // }

  // console.log(generatePyramid(5));

  // function generatePyramid(n) {
  //   let pyramid = " ";

  //   for (let i = 1; i <= n; i++) {
  //     let row = "";
  //     let space = "";
  //     let spaceCount = n - i;

  //     for (let s = 1; s <= spaceCount; s++) {
  //       space += " ";
  //     }

  //     if (i === 1) {
  //       pyramid = pyramid+" "+ space + i + "\n";
  //     } else {
  //       for (let j = i; j <= i + i - 1; j++) {
  //         row = row + " " + j;
  //       }
  //       pyramid +=
  //         space + row + row.split("").reverse().splice(1).join("") + "\n";
  //     }
  //   }
  //   return pyramid;
  // }
  // console.log(generatePyramid(5));

  // let arr2 = [5];
  // arr2.push([2, 3, [59, 43], 5]);
  // let two = arr2.join("");
  // console.log(two);
  // let resut = [...two];
  // console.log(resut);
  // let result = resut.filter((nu) => {
  //   if (Number(nu) == nu) {
  //     return nu;
  //   }
  // });
  // console.log(result);

  // let arrr = [5, [3, 5], [535, 53, [35, 353, [35]]]];
  // let ree = arrr.join();
  // let ec = [...ree];
  // let reu = ec.filter((ecc) => {
  //   if (Number(ecc) == ecc) {
  //     return ecc;
  //   }
  // });
  // let f = reu.join(" ").split(" ");
  // let near = [];
  // let ff = f.map((el) => {
  //   return Number(el);
  // });
  // let rd = [...new Set(ff)];
  // let rdr = rd.reduce((a, b) => {
  //   return a + b;
  // });
  // console.log(rdr);
  // const [count, setCount] = useState("david");
  // useEffect(() => {
  //   async function fecthing() {
  //     setTimeout(() => {
  //       console.log("settimeout");
  //       setTimeout(()=>{
  //         console.log("inner")
  //       },100)
  //     }, 2000);
  //   }
  //   fecthing();
  // }, []);
 
  // console.log("semo")
  // console.log(count);
  return (
    <div className="App">
      <h1>hello interview</h1>
    </div>
  );
}

export default App;
