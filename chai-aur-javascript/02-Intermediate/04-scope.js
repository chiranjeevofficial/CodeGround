/*
    1. its the block scope
    {
        code
        code
    }
    2. outside the block scope is the global scope
*/

// const a = 10;
// let b = 20;
// var c = 30;

// var c = 300;
// if (true) {
//     const a = 10;
//     let b = 20;
//     var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a  = 23;
// if (true) {
    // let a = 10;
    // console.log(`Inner a : ${a}`); // 10
// }
// console.log(`Outer a : ${a}`); // 23

// ===================================== scope 2 =====================================
function one() {
    let username = "chiranjeev";
    function two() {
        let website = "youtube.com";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

// console.log(addOne(5));;
function addOne(num) {
    return num + 1;
}

// addTwo(8);
let addTwo = function (num) {
    return num + 2;   
}

