// console.log("hello js");
// console.error("hello js");
// console.warn("hello js");

//! переменные
// let,var,const
// const birsh = "09.10.1998";
// console.log("birth");
// console.log("birth");
// birth = "09.10.1990"

// console.log("birth");
// let lastName = "PavLova";
// console.log("birth");
// LastName = "Pirigova";
// let lastName = "LastName";
// var firstName = "Anna";
// firstName = "Elena";
// console.log(firstName);
//! название переменных
// нельзя ставить цифры в начало
// let 5block = ''
// нельзя ставить зарезирванные слова
// let let
// let first name
// lat first-name
// const Red = "qww1313"
//  можно так
// let camelCase
// let color_orange
// const RED = "qww1313"
// const $block = "";
// const number10 =10;

// !типы данных
// 1 string
// let str = "strochka";
// console.log(str.length);
// console.log(str);
// const type0fStr = type str ;
// console.log (type0Str)

// console.log(typeof str)
// let str1 = "qwe";
// let str = "asd";
// let str = `zxc`;
// 2 number
// let num1 = 10;
// const PI = 2,14;
// 3booler
// const bool1 = true;
// const bool2 = false;
// 4 null -спецальная пустота
// let error = null;
// 5 undefined
// let hello;
// console.log(hello);
// 6 object (object, Array)
// let usre = {
//   name: "dina kim",
//   age: 20,
// };
// console.log(usre.name);

// console.log(user.age);
// console.log(user["name"]);
// array
// let arr = [false, 100, true, {}, [], "hello"];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// 7 symbol
// let id = symbol("ere33r");
// 8 BigInt
// let int = 34211212n;
// console.log(2 ** 3);
// console.log(10 % 7);
// console.log("10" / "2");
//! NaN -->Not A Number
// console.log("hello" / 2);
//! +
//! const --> слияние
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);
// ! true-false значение
// console.log(Boolean(0));  //false
/*console.log(Boolean(-1)); //true
console.log(boolean(null)); //
console.log(boolean(undefined)); //false

console.log(boolean("hello")); //true
console.log(boolean("")); //false*/
//!сравнение
//! строгое
//*console.log(3 === 5); //false
console.log(3 === "3"); //false
console.log(3 !== 5); //true

//! нестрогое (значения должны быть ровны)
console.log(3 == 3); //TRUE
console.log("3" == 3); //true
console.log("3" != 3); //false
//!>,<, =
console.log(3 < 5); //true
// console.log(5 < 3); //false
// console.log(4 >= 4); //true
// console.log(4 <= 4);     //true
//! из string в number
// let elem = "10000sald,al";
// console.log(elem);
// console.log(+elem);
//! parseInt
// let elem = "1000000sdkfjsd";
// console.log(parseInt(elem2));
//! parseFloat
// let elem3 = "23123.3dfoko32";
// console.log(parseFloat(elem3));
//!Number
// let elem4 = "1000";
// console.log(Number(elem4));
//!из Number в string
// let num = 9999;
// console.log(num);
// console.log(typeof num.toString());
// console.log(String(num));
//!alert, prom , confirm
// alert("hello, user");
// let firstName = prompt("как вас зовут");
// console.log(firstName);
//интерполяция -встроенное выражение
// alert(`${firstName},welcome`);
// let value = confirm("вам есть 18?");
// console.log(value);
let num1 = prompt("введите первое число");
let operator = prompt("введите математ. опратор");
let num2 = prompt("введите второе число ");
let result = eval(num1 + operator + num2);
alert(result);
