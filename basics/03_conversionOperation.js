let score = "33abc"

// console.log(typeof score);
// conversion in number
let valueInNumber = Number(score)  //to covert string to number but it can covert alphbate also which is not correct
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// after conversion what we get as a value
// "33" => 33
// "33abc" => Nan(Not a number)
// true =>1 ,false =>0

// conversion in boolean
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// after conversion in boolean what we got
// 1 => true , 0=> false
// "" => false (empty string), "suraj" => true 


// conversion in string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);