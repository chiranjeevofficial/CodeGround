/* ============================== Array Prototypes ==============================
at() -------------> 
concat() ---------> its used to make new array with caller and passed array elements.
Array() ----------> 
copyWithin() -----> 
entries() --------> 
every() ----------> 
fill() -----------> 
filter() ---------> 
find() -----------> 
findIndex() ------> 
findLast() -------> 
findLastIndex() --> 
flat() -----------> its used to return element of all array and sub-array.
flatMap() --------> 
forEach() --------> 
includes() -------> its used to check passed argument are have array or not.
indexOf() --------> its used to know the indexOf of passed argument.
join() -----------> its used to get parent array element and convert it intothe string.
keys() -----------> 
lastIndexOf() ----> 
length ---------->>  
map() ------------> 
pop() ------------> its used to remove last element in the array.
push() -----------> its used to insert element or array in the last on the array
reduce() ---------> 
reduceRight() ----> 
reverse() --------> 
shift() ----------> its used to remove first element in the array
slice() ----------> its used to return part of array slice(startFrom, endTo) and endTo not include.
some() -----------> 
sort() -----------> 
splice()  --------> its used to slice array, its include start and or point and remove that part in the array.
toLocaleString() -> 
toReversed() -----> 
toSorted() -------> 
toSpliced() ------> 
toString() -------> 
unshift() --------> its used to insert elemnet in the starting on the array.
values() ---------> 
spread ---------->> ... oerator, its used to spraed all element of array.
Array.isArray() --------> its used to check passed argument is array or not and its return boolean value.
Array.from() -----------> its used to make passed argument in array;
Array.of() -------------> its return new array of passed element.
*/

const chiranjeevi = ['Aswattama','Bali','Ved Vyas','Hanuman','Vibhishan','Kripacharya','Parshuram','Markandey'];
const tridev = ['Mahadev','Vishnu','Brahmaa']
let dev = [...chiranjeevi, ...tridev]

// chiranjeevi.push(tridev); //its push array as an element.
// console.log(chiranjeevi);
/* [ 'Aswattama','Bali','Ved Vyas','Hanuman','Vibhishan','Kripacharya','Parshuram','Markandey',[ 'Mahadev', 'Vishnu', 'Brahmaa' ] ]*/
// console.log(chiranjeevi[8][2]); its push array as an element.
console.log(chiranjeevi.concat(tridev)); //its merged concat array ellement in root array.

// let myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, [10, 11], 12], 13], 15];
// myArr = myArr.flat(Infinity);
// console.log(myArr);