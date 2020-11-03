//======== Implicit Type Coercion =======

//======== String coercion =======
var x = "Vinod";
var y = 99;
console.log(x + y) // Returns string "Vinod99" 

var z = "98";
console.log(y-z);   // when '-' is used string coverted to number and substaction takes place
console.log(z-y);   


//======== Boolean coercion =======
// All values except 0, 0n, -0, “”, null, undefined and NaN are truthy values
var x = 0;
var y = 23;

//if statements
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)          
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

//Logical operations
// '||' If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.
console.log(10 || 0);   // returns 10
console.log(0 || 10);   // returns 10
console.log(10 || 11);   // returns 10
console.log(0 || null);   // returns null

// '&&' If the first value is falsy, then the first value is returned. Otherwise, always the second value gets returned.
console.log(10 && 0);   // returns 0
console.log(0 && 10);   // returns 0
console.log(10 && 11);   // returns 11
console.log(0 && null);   // returns 0

//========Equality Coercion =========
//The '==' operator compares values and not types.
// The reality is that while using the '==' operator, coercion takes place.
// The '==' operator, converts both the operands to the same type and then compares them.
var a = 12;
var b = "12";
console.log(a == b) // true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

// Coercion does not take place when using the '===' operator. Both operands are not converted to the same type in the case of '===' operator.
var a = 226;
var b = "226";
console.log(a === b) // false because coercion does not take place and the  operands are of different types. Hence they are not equal.

//======== end of implicit Type Coercion =======