/*====== JS pass by value for primitives =======*/
var y = 234; // y pointing to address of the value 234
var z = y;  // z pointing to a completely new address of the value 234
        
// Changing the value of y
y = 23;
console.log("y = " + y);
console.log("z = " + z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z


/*====== JS pass by value(passing reference) for objects =======*/

// obj pointing to address of { name: "Vivek", surname: "Bisht" }
var obj1 = { name: "Vivek", surname: "Bisht" };
var obj2 = obj1; // obj2 pointing to the same address 

// changing the value of obj1
obj1.name = "Akki";        
console.log("obj1 = " + JSON.stringify(obj1));
console.log("obj2 = " + JSON.stringify(obj2)); // Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.