/**
 * Callbacks in Java
 * A callback is a function that will be executed after another function gets executed.
 * Functions that are used as an argument to another function are called callback functions.
 * JavaScript functions have the type of Objects. So, much like any
 * other objects (String, Arrays etc.), They can be passed as an argument to any other function while calling.
 */

function divideByHalf(sum){
    console.log(Math.floor(sum / 2));
  }
  
  function multiplyBy2(sum){
    console.log(sum * 2);
  }
  
  function operationOnSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
  }
  
  operationOnSum(3, 3, divideByHalf); // Outputs 3
  operationOnSum(5, 5, multiplyBy2); // Outputs 20

operationOnSum(5,6,function disp(value){ 
    document.write("Message from callback method");
    document.getElementById("sometext").innerHTML = "Vinod";
    console.log("Message from callback method");
    console.log(value);
}); 



  //Ref: https://www.geeksforgeeks.org/javascript-callbacks/