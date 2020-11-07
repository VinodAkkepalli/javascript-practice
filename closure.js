/*======closure=====*/
/** 
 * closures are defined as inner functions that have access 
 * to variables and parameters of outer function even after
 * the outer function has returned.
*/

var Person = function(pName){
    var name = pName;
  
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("Vinod");
  
  //Concept of closure makes sure that the value of "Vinod"
  //is available for getName() method even after Person 
  //function execution completed above
  console.log(person.getName());


//Example 2
  function randomFunc(){
    var obj1 = {name:"Vivian", age:45};
  
    return function(){
      // Has access to obj1 even when the randomFunc function is executed
      console.log(obj1.name + " is "+ "awesome"); 
    }
  }
  
  console.log(randomFunc());
  var initialiseClosure = randomFunc(); // Returns a function
  
  initialiseClosure();

//Example 3
function foo() { 
  var b = 1; 
  function inner(){ 
    return b; 
  } 
  return inner; 
}

var get_func_inner = foo();	
// console.log(foo);

console.log(get_func_inner()); 
console.log(get_func_inner()); 
console.log(get_func_inner()); 


//Example 4
function bar(outer_arg) { 

	function inner(inner_arg) { 
		return outer_arg + inner_arg; 
	} 
	return inner; 
} 
var get_func_inner = bar(5); 

console.log(get_func_inner(4)); 
console.log(get_func_inner(3)); 

//Example 5
// Outer function 
function outer() { 
	var arr = []; 
	var i; 
	for (i = 0; i < 4; i++) 
	{ 
		// storing anonymus function 
		arr[i] = function () { return i; } 
	} 

	// returning the array. 
	return arr; 
} 

var get_arr = outer(); 
// console.log()

/*Explanation: In the below code we have created four closure 
which point to the variable i which is local variable to the function outer.
Closure don’t remember the value of the variable it only points to
the variable or stores the reference of the variable and hence,
returns the current value. In the above code when we try to update
the value of it gets reflected to all because the closure stores the reference. */
console.log(get_arr[0]()); //prints 4
console.log(get_arr[1]()); //prints 4
console.log(get_arr[2]()); //prints 4
console.log(get_arr[3]()); //prints 4

//Example 6
// Outer function 
function outer1(){ 
	function create_Closure(val){ 
		return function(){ 
			return val; 
		} 
	} 
	var arr = []; 
	var i; 
	for (i = 0; i < 4; i++){ 
		arr[i] = create_Closure(i); 
	} 
	return arr; 
} 
var get_arr = outer1(); 
console.log("Clousure corrected to get individual value of variables");
/**In the above code we are updating the argument of the 
 * function create_Closure with every call. 
 * Hence, we get different values of i at different index. */
console.log(get_arr[0]()); 
console.log(get_arr[1]()); 
console.log(get_arr[2]()); 
console.log(get_arr[3]()); 


//=======Application of closure========

//Example 7
/** In this example, the rentPrice() function returns an object with three methods:
 *  getRent(), incRent(), and decRent(). These three methods has access
 *  to the private variable rent. However, the code outside its scope
 *  cannot directly access this variable. Hence, we can mimic object 
 *  oriented programming in JavaScript.
 */

var rentPrice = function(initialRent) { 
  var rent = initialRent; 
  
    // Defien private variables for the closure 
    return { 
      getRent: function() { 
        return console.log(rent); 
      }, 
      incRent: function(amount) { 
        rent += amount; 
        console.log(rent); 
      }, 
      decRent: function(amount) { 
        rent -= amount; 
        console.log(rent); 
      } 
    } 
} 
  
  var Rent = rentPrice(8000); 
  
  // Access the private methods 
  Rent.incRent(2000); 
  Rent.decRent(1500); 
  Rent.decRent(1000); 
  Rent.incRent(2000); 
  Rent.getRent();

  //Example 8
  (function() { 

    var multFn = function multiply() { 
      // This variable is local to 
      // the closure and holds 
      // its value inbetween 
      // multiple calls 
    var mult = 9; 
    return function(val) { 
      mult = mult * val; 
      return mult; 
    } 
    }; 
    
    var mult = multFn(); 
      
    // Call the method 
    // multiple times 
    console.log(mult(2)); 
    console.log(mult(3)); 
    console.log(mult(5)); 
    }());
    

//References
// https://www.geeksforgeeks.org/closure-in-javascript
// https://www.geeksforgeeks.org/what-is-the-practical-use-for-a-closure-in-javascript
