// iteration with break and continue
// for loop
// for (let i = 0 ; i <= 10 ; i++) {
    // console.log(`Namaste ${i} time`);
    // if (i == 7) {
        // console.log(`Hurry, i find ${i}`);
        // break;
    // }
    // if (i == 5) {
        // console.log(`I detect ${i}`);
        // continue;
    // }
    // console.log(`${i}`);
// }

// while and do-while loop
// let index = 0;
// while (index <= 10) {
    // console.log(`Value of Index is: ${index}`);
    // index = index + 1;
    // index += 1;
    // index++;
// }

// let myArray = [10, 5, 20, 15, 30, 25, 40, 35, 50, 45];
// let index = 0;
// while (index < myArray.length) {
    // console.log(`Array ${index} value is: ${myArray[index]}`);
    // index++;
// }

<<<<<<< HEAD
// let score = 11;
// do {
    // console.log(`Score is ${score}`);
    // score++;
// } while (score <= 10);

// ====================== for-of loop ====================== 
// ["","",""] handle the string
// [{},{},{}] handle the object

// const arr = [1, 3, 5, 7, 9];
// for (let num of arr) {
//     console.log(num);
// }

// const greeting = "Namaste! Javascript";
// for (const greet of greeting) {
    // console.log(greet);
// }

//  ====================== MAP ====================== 
/*
-> Map objects are collections of key-value pairs.
-> A key in the Map may only occur once; it is unique in the Map's collection.
let map = new Map();
*/
// let stateCode = new Map();
// stateCode.set("UK" , "Uttara Khand");
// stateCode.set("UK" , "Uttara Khand");
// stateCode.set("UP" , "Uttar Pardesh");
// stateCode.set("MP" , "Madhya Pardesh");
// stateCode.set("MP" , "Madhya Pardesh");
// console.log(stateCode);

// for (const key of stateCode) { // its return the array of each set
//     console.log(key);
// }

// for map de-structuring
// for (const [key , value] of stateCode) {
    // console.log(`${key} -> ${value}`);
// }
// Note:: MAP are itteratable, but object not because object have different algo to itterate.

// const lang = {
//     js : "JavaScript",
//     py : "python",
//     jsx : "react",
//     cpp : "c++"
// }

// for (const key in lang) {
//     console.log(`${key} shortcut is for ${lang[key]}`);
// }

const lang = ["c","c++","java","python","javascript"];
for (const i in lang) {
    console.log(lang[i]);
}
// remember that, we you teach someone from scratch then tell her array index like a key for array value.
=======
// let score = 1;
let score = 11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);
>>>>>>> parent of a1fdbdb (Update 07-iteration.js)
