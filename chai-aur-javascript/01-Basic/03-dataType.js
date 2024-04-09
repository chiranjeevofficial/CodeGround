"use strict"; //treat all JS code as newer version

// alert(3 + 3); // we're using nodeJS, not browser
// console.log(3 + 3); // code readability should be high

let name = "Chiranjeev";
let age = 18;
let isLoggedIn = false;

// primitive dataTypes
// number =======> 2^53
// bigInt =======>
// string =======> ""
// boolean ======> true/false
// null =========> standalone value | object
// undefined ====> 
// symbol =======> unique


// object
console.log(typeof "");
console.log(typeof age);
console.log(typeof null);

// ######################################################################
// ======================== Data Type Conversion ========================
// let score = 1;

// toInt(score);
function toInt(args) {
    console.log(
        "Before Conversion\n"+
        "Value --- "+args+"\n"+
        "Type ---- "+typeof args
    );
    args = String(args);
    console.log(
        "\nAfter Conversion\n"+
        "Value --- "+args+"\n"+
        "Type ---- "+typeof args+"\n"
    );
    // console.log(`
    // Value is: ${args}
    // Type is : ${typeof args}
    // Integer : ${Number.isInteger(args)}`);
    // args = Number(args);
}

// console.log(`Before conversion: ${typeof score}`);
// score = Number(score);
// console.log(`After conversion:  ${typeof score}`);

// if (Number.isInteger(score))
//     console.log(`its number: ${score}`);
// else
//     console.log(`its NaN: ${score}`);

// **************************** operations ****************************
// let value = 5;
// value = -value;
// console.log(value);

// console.log(2 + 2);      // addition
// console.log(2 - 2);      // subtration
// console.log(2 * 2);      // multiplication
// console.log(7.5 / 2);    // division (pure division)
// console.log(5 ** 3);     // exponent (x^y)
// console.log(2 % 3);      // remainder

// in below example, we know how to add two string.
// let greet = "Namaste! ";
// let userName = "Chiranjeev";
// let greeting = greet + userName;
// console.log(greeting);

// console.log(`${"1" + 2}\n${typeof("1" + 2)}`);               // 12 string
// console.log(`${1 + "2"}\n${typeof(1 + "2")}`);               // 12 string
// console.log(`${"1" + "2"}\n${typeof("1" + "2")}`);           // 12 string
// console.log(`${"1" + 2 + 2}\n${typeof("1" + 2 + 2)}`);       // 122 string
// console.log(`${1 + 2 + "2"}\n${typeof(1 + 2 + "2")}`);          // 32 string

// console.log(true);       // true
// console.log(+true);      // 1
// console.log(true+);      // syntax error
// console.log(true++);     // compile time error
// console.log(+"");        // 0
// console.log(""++);       // compile time error


// #####################################################################
// ========================= Data Type Summary =========================
/*
* In Javascript, there are only 2 type(category) of datatypes.
# Primitive DataType (7 Types) (That are store in Stack)
    1. String
    2. Number (100, 100.5)
    3. Boolean (let loggedIn = true || false)
    4. null (let temperature = null)
    5. undefined
    6. Symbol (let userId = Symbol('123'))
    7. BigInt
# Non-Primitive DataType (Reference Type: 3 Types) (That are store in Heap)
    1. Array
    2. Object
    3. function

## categorization is based on, how to save data in memory and how can i access it.
## javascript is a dynamically typed language, because we can't define the type of variable are hold the value.
*/

// Reference DataType Example
// Array
// const chiranjeevi = ['Aswattama','Bali','Ved Vyas','Hanuman','Vibhishan','Kripacharya','Parshuram','Markandey'];

// Object
// let obj = {
//     username : 'Chiranjeev',
//     age : 22
// }

// function
// let fun = function() {
//     console.log('Namaste! JavaScript');
// }
// fun();