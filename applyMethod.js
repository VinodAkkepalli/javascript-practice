// The apply method is similar to the call() method. The only difference is that,
// call() method takes arguments separately whereas, apply() method takes arguments as an array.

function saySomething(message1, message2){
    return this.name + " is " + message1 + " and " + message2;
}
          
var person4 = {name:  "John"};
          
console.log(saySomething.apply(person4, ["awesome", "lazy"]));
console.log(saySomething.apply(person4, ["cute", "smoochy"]));
