console.log("Vinod");   // this message show in debug console 
// alert("Vinod");  // to show alert message

// manipulate DOM
// var str = prompt("Enter some text"); // to request input from user
// document.getElementById('sometext').innerHTML = "You entered: " + str;


//Variables
var a = 100;
console.log("Value of a: " + a);


//Functions
//Creation (notice: unlike java, here we don't need to specify the type of input)
function myFun(input1, input2) {
    console.log(input1 + input2);
}

//Calling function
myFun("Something", "Extra");
myFun(10, 20);



//while loop
var num = 1;
while(num <= 5) {
    console.log(num);
    num++;
}

//for loop
for (let index = 0; index < 3; index++) {
    console.log(index);
}

//======== Data types=======
let age = 20;   // number
let name = "Vinod"  // string

let obj = { //object
    first: "firstName",
    last: "lastName",
    method: function() {
        return this.first + " " + this.last;
    }
};
console.log(obj.method());  //call method

let bool =  false;  // boolean
let fruits = ["apple", "banana", "kiwi"];   // array
let random; // undefined
let nothing = null  // value null;
let bigInteger =  234567890123456789012345678901234567890;  //bigint

console.log(typeof "John Doe"); // Returns "string"
console.log(typeof 3.14); // Returns "number"
console.log(typeof true); // Returns "boolean"
console.log(typeof 234567890123456789012345678901234567890n); // Returns bigint
console.log(typeof undefined); // Returns "undefined"
console.log(typeof null); // Returns "object" (kind of a bug in JavaScript)
console.log(typeof Symbol('symbol')); // Returns Symbol
//======== End of Data types=======


//======== Diff between '==' and '===' =======
var x = 2;
var y = "2";
if(x == y) { // Returns true since the value of both x and y is the same
    console.log("value of both x and y is the same");
} 
if (x === y) { // Returns false since the typeof x is "number" and typeof y is "string"
    // true only when both of same type and also value is same
    console.log("typeof x is number and typeof y is string");
} 
//======== End of Diff=======


//======== Hoisting=======
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
}

// Hoisting takes place in the local scope as well
function doSomething(){
    x = 33;
    console.log(x);
    var x;
}
doSomething();

var ij;
console.log(ij); // Outputs "undefined" since the initialization of "x" is not hoisted
ij = 23;

// To avoid hoisting, you can run javascript in strict mode
// by using “use strict” on top of the code

//======== end of Hoisting=======



// NaN property represents “Not-a-Number” value. It indicates a value which is not a legal number.
// typeof of a NaN will return a Number .
// To check if a value is NaN, we use the isNaN() function,
// isNaN() function converts the given value to a Number type, and then equates to NaN.

console.log(isNaN("Hello"))  // Returns true
console.log(isNaN(345))   // Returns false
console.log(isNaN('1'))  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
console.log(isNaN(true)) // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false)) // Returns false
console.log(isNaN(undefined)) // Returns true


