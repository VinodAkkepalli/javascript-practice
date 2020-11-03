/*====== Higher order functions ======*/
  // Functions that operate on other functions, either by taking them as arguments
  // or by returning them, are called higher-order functions.
  
  function myHigherOrderFun() {
    return function() {
      return "Do something";
    }
  }
          
  var x = myHigherOrderFun();
  console.log(x())   // Returns "Do something"