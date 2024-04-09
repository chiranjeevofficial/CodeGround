let user = {
    username: "chiranjeev",
    price: 1299,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "narayan";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "chiranjeev";
//     console.log(this.username);
// }
// chai(); //undefined

// let chai = function () {
    // let username = "chiranjeev";
    // console.log(this.username);
// }
// chai(); //undefined


// arrow function
// let chai = () => {
    // let username = "chiranjeev";
    // console.log(this);
// }
// chai(); //undefined

// arrow function syntax (basic arrow function)
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2,4)); //6

// arrow function syntax (implycit return), its used for exturn single-line statement and return value;
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(2,4)); //6

// const addTwo = (num1, num2) => (num1 + num2);
// console.log(addTwo(2,4)); //6

// # if you wan't to return the object, then its neccessary to write expresion in () ("paranthesis")
// let addTwo = (num1, num2) => ({
    // username : "chiranjeev@kk"
// })
// console.log(addTwo(2,1));

// ========================== Immediately Invoked Function Expresssion (IIFE)==========================
// that is used to protect global scope pollution.
// NOTE : end IIFE function with (;) (semicolon)
/*
    // # named IIFE
    (
        function functionName(parameters) {
            // code
        }
    )(arguments);

    // # unnamed IIFE
    ((parameters) => {
            // code
    })(arguments);
*/