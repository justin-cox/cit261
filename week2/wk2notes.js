// Week 2 Notes


/* Chapter 2
typeof = find out the type of a value

Single quote marks \'
Double quote marks \"
End of line \n
Carriage return \r
Tab \t

If something is not meant to be changed, use the const keyword.

.trim() = will remove any whitespace from the beginning and end of a string.
.repeat(num) = repeats string the stated number of times.

*/

///////////////////////////////////////////////////
// TEMPLATE LITERALS
// can be used to perform JavaScript expressions inside a string.
const name = `Justin`;
`Hello ${ name }!`;
// << 'Hello Justin'

const age = 26;
`I will be ${ age + 1 }`;
// << 'I will be 27 next year'

// not uncommon to use backticks for all strings in ES6 code.
///////////////////////////////////////////////////


////////////////////////////////////////////////////
// .toFixed(number) = rounds a number to a fixed number of decimal places.
////////////////////////////////////////////////////

///////////////////////////////////////////////////
// Number('23');
// << 23
// 
// String(3);         or      3.toString();
// << '3'                     << '3'
//
// parseInt('5', 10) -> 5       // base 10
// parseFloat('5.5, 10) -> 5.5
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Soft Equality ==  -> does not take data type into account
// Hard Equality ===  -> takes in to account data type
//////////////////////////////////////////////////

// Chapter 3 Arrays
// METHODS
// array.length = number of elements in the array
// array.pop() = removes the last element
// array.shift() = removes the first element
// array.push() = appends new value to end of the array
// array.unshift() = appends new value to beginning of array
// array = array.concat(array) = merges two arrays
// array.join() = turn array into string separated by commas between values
// array.join(' & ') = uses & as separator instead of comma
// array.reverse() = reverses the order of elements in the array
// array.sort() = sorts the array. Does not work for numbers
// array.indexOf(item) = return index of element if found in array
// array.includes(item) = returns boolean of whether or not value was found in array


// SETS
// - Cannot contain duplicate values
// - Good for checking if a value is found in a set.
const list = new Set(); // no literal notation available
list.add(1); // add one value
list.add(2).add(3).add(4); // add multiple values

const numbers = new Set([1, 2, 3]); // declaration for filled set
// use set.add('value') for words that need to be added
// no type coercion. Will allow 2 and '2'.

const justiceLeague = new Set().add('Superman').add('Batman').add('Wonder Woman');
// justiceLeague.size() -> 3
// justiceLeague.has('Superman') -> true
justiceLeague.delete('Superman'); // removes from set
justiceLeague.clear(); // removes all values from set

// use spread operator to convert set to array
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');
const shoppingArray = [...shoppingSet];
// or use Array.from(set)
const shoppingArray = Array.from(shoppingSet);

// remove duplicate values from an array using set and spread operator
const duplicate = [3, 2, 3, 4, 5, 5, 6, 6, 6, 7, 8, 8, 9, 9];
const nonDuplicate = [...new Set(duplicate)]; // removes duplicates in array declaration

// WEAK SETS
// - only non-primitive values can be added to weak sets
// - have the same methods as regular sets
const weak = new WeakSet();
const array = [1, 2, 3];
weak.add(array);

// MAPS
const romanNumerals = new Map();
romanNumerals.set(1, 'I');
// => = hash rocket symbol
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');

romanNumerals.get(4); // 'IV'
romanNumerals.has(5); // check if there is a particular key in a map

const heroes = new Map([['Clark Kent', 'Superman', 'Bruce Wayne', 'Batman']]);
heroes.size(); // 2
heroes.delete('Clark Kent'); // removes key and value pair
heroes.clear(); // removes all key a value pairs

// convert maps to arrays
Array.from(romanNumerals);

// weak map declaration
const weakMap = new WeakMap();

// TERNARY OPERATOR
const n = 5;
n % 2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');

//shorter?
console.log(`n is a ${(n % 2 === 0)? 'even' : 'odd'} number`);


// Chapter 4 Functions

// /////////////////////////////////
// Function Declarations - defines a function literal
// Functions Expressions - assigns an anonymous function to a variable
// Function Constructors - body of functions is entered as a string (Not recommended)
// /////////////////////////////////



// /////////////////////////////////
// Uses the rest operator (...) that creates an array of the arguments that are available
// inside the body of the function.

function mean(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total/values.length;
}

mean(2, 8, 13, 11, 4, 2); // 6.666666666666667

// When using default parameters, make sure it is always after all the other parameters.
// /////////////////////////////////



// /////////////////////////////////
// Arrow Functions

// only a return statement
const square = x => x * x;

// more than one parameter
const add = (x, y) => x + y;

// no parameters
const hello = () => alert('Hello World');

// arrow functions are best used for shorter functions
// ////////////////////////////////



// /////////////////////////////////
// Hoisting

// For variable hoisting, it’s better practice to use const and let to declare any variables at the beginning 
// of a block so hoisting is unnecessary.
// /////////////////////////////////



// /////////////////////////////////
// Callbacks
// functions that are used as arguments in another function

// forEach()
const colors = ['Red', 'Green', 'Blue'];

// the forEach() method invokes a callback function on each item in an array
colors.forEach((color, index) =>
    console.log(`Color at position ${index} is ${color}`));


// map()
[1, 2, 3].map(x => 2 * x); // [2, 4, 6]

////////////////////////////////////

