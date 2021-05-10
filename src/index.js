/**
 * const let等の関数宣言
 */

//  var val1 = "var変数";
//  console.log(val1);

//  // var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);

//  // var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// constは再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "てけ",
//   age: 32
// };
// console.log(val4);
// val4.name = "teke";
// console.log(val4);
// val4.adress = "Japan";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "てけ";
// const age = "32";

// 「私の名前はてけです。年齢は32歳です

// 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
//  function func1(str) {
//    return str;
//  }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

//アロー関数 {}中身がreturnのみだと{}とreturn省略可能
// const func3 = (str) => str;
// console.log(func3("func3です"));

// アロー関数 引数2つ
// const func4 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func4(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "てけ",
//   age: 32
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年は${age}歳です。`;
// console.log(message2);

// const myProfile = ["てけ", 32];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。歳は${age}です`;
// console.log(message4);

/**
 * デフォルト、引数
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("てけ");

/**
 * スプレッド構文
 */

// 配列の展開

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilter
 */

const nameArray = ["田中", "山田", "鈴木"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArray.map((name, index, array) => {
//   console.log(name);
//   console.log(index);
//   console.log(array);
//   console.log(`名前は${name}です`);
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

const newNameArray = nameArray.map((name) => {
  if (name === "鈴木") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArray);
