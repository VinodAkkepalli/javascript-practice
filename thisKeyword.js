
// below function is a member of global scope i.e window scope
// so 'this' returns window object
function doSomething() {
    console.log(this);
  }
          
doSomething();

// at the time of invocation, the getName function is a property
// of the object obj, therefore, the this keyword will refer to
//  the object obj , and hence the output will be “vivek”
var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}

console.log(obj);        
console.log(obj.getName());



// Although the getName function is declared inside the object obj , at the time
// of invocation, getName() is a property of obj2 , therefore the “this” keyword will refer to obj2 .
var obj = {
    name:  "vivek",
    getName: function(){
        console.log(this.name);
    }    
}

var getName = obj.getName;        
var obj2 = {name:"akshay", getName };
console.log(obj2.getName());


//getAddress function when invoked on obj2 which contains no address property, throws error 
var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}
       
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
console.log(obj2.getAddress());    //as obj2 has no address property, error thrown