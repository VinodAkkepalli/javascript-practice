// IIFE - Immediately Invoked Function Expression
// This pattern is often used when trying to avoid polluting the global namespace,
// because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope.

(function (){
    var aName = "Barry";
    console.log("Message printed from IFFY");
    console.log(aName);
  })();

  // console.log(aName); //Uncaught ReferenceError: aName is not defined



  