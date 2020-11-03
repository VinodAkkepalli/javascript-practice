
//call() It’s a predefined method in javascript.
//This method invokes a method by specifying the owner object.
function sayHello(){
    return "Hello " + this.name;
  }
          
  var obj = {name: "Sandy"};
  console.log(sayHello.call(obj)); // Returns "Hello Sandy"
  obj = {name: "Vinod"};
  console.log(sayHello.call(obj)); // Returns "Hello Vinod"



  //Example with passing arguments
  function saySomething(message){
    return this.name + " is " + message;
  }
  
  var person4 = {name:  "John"};          
  console.log(saySomething.call(person4, "awesome"));  // Returns "John is awesome"    
  console.log(saySomething.call(person4, "lazy"));


  //Example with 
  var person = {
    age: 23,
    getAge: function(){
      return this.age;
    }
  }
          
  var person2 = {age:  54};
  console.log(person.getAge.call(person2)); // Returns 54  
  console.log(person.getAge()); // Returns 23 

