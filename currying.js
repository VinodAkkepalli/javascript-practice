//Currying is an advanced technique to transform a function of arguments n, 
//to n functions of one or less arguments. 

//Uses of currying function
// 1) It helps to avoid passing same variable again and again.
// 2) It is extremely useful in event handling. 

function add (a) {
    return function(b){
      return "a + b = " + (a + b);
    }
  }
  
console.log(add(3)(4));


// Example 2
function multiply(a,b){
    return a*b;
  }
  
  function currying(fn){
    return function(a){
      return function(b){
        return fn(a,b);
      }
    }
  }
  

  var curriedMultiply = currying(multiply);
  
  //normal method, normal invocation
  console.log(multiply(4, 3)); // Returns 12
  
  //curried method
  console.log(curriedMultiply(4)(3)); // Also returns 12

