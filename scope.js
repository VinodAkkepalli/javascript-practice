// if the javascript engine does not find the variable in local scope,
// it tries to check for the variable in the outer scope. If the variable 
// does not exist in the outer scope, it tries to find the variable in the global scope.


/* =========Global scope=========*/
var globalVariable = "Hello world";

function sendMessage(){
  return globalVariable; // can access globalVariable since it's written in global space
}

function sendMessage2(){
  return sendMessage(); // Can access sendMessage function since it's written in global space
}

console.log(sendMessage2());  // Returns “Hello world”

/* =========Function scope=========*/
function awesomeFunction(){
    var a = 2;
  
    var multiplyBy2 = function(){
      console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
    }
  }

// Throws reference error since a is written in local scope and cannot be accessed outside
// console.log(a);
  
// Throws reference error since multiplyBy2 is written in local scope
// console.log(multiplyBy2());


/*========Block scope======== */
{
    let x = 45;
    console.log("Access inside block: x = " + x);
}

// Gives reference error since x cannot be accessed outside of the block
// console.log("Access outside block: x = " + x);
  
for(let i=0; i<2; i++){
    console.log(i);
}

// Gives reference error since i cannot be accessed outside of the for loop block
// console.log(i);

/*Example: scope chaining */
var y = 24;

function favFunction(){
  var x = 667;
  var anotherFavFunction = function(){
    console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
  }

  var yetAnotherFavFunction = function(){
    console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
  }

  anotherFavFunction();
  yetAnotherFavFunction();
}


favFunction();