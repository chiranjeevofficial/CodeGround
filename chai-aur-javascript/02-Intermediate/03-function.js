// # function
function sumOfTwo(num1, num2) {
    return num1 + num2;
}

function sayNamaste(username) {
    if (username)
        console.log(`Namaste! ${username}`);
}

function sayNamaste(username = "Narayan") {
    console.log(`Namaste! ${username}`);
}

// console.log(`Sum of ${1} & ${8} is ${sumOfTwo(1,8)}`);
// sayNamaste();

// ========================= function-02 =========================
// in below, ... its a rest operator, its used to contain N argument, but it's take as array
function calculateCardPrice(...num) {
    return num;
}

// console.log(calculateCardPrice(21,22,23));

// # how to pass object in function
let book = {
    name : "Namaste! JavaScript",
    price : 499.0
}

function handleBook(book) {
    console.log(`Book Name is ${book.name} and Price is ${book.price}`);
}

// handleBook(book);
// directly passed the object
// handleBook({
//     name : "C++",
//     price : 789
// });

// # how to pass array in function
let numArray = [
    200,
    400,
    600
]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(numArray));
// directly passed the array
// console.log(
//     returnSecondValue([
//         200,
//         250,
//         300,
//         350
//     ])
// );