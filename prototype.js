/**
 * prototype practice
 * 
 */

 // create an object using function constructor
function Person(name, job, yearOfBirth){    
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 

// this will show Person's prototype property. 
// you can see Person has a prototype property and that prototype
// property has a constructor object which again points to the Person
// constructor function.
console.log(Person.prototype); 

// adding calculateAge() method to the Prototype property 
Person.prototype.calculateAge= function(){ 
	console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 

// creating Object Person1 
let Person1= new Person('Jenni', 'clerk', 1986); 
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1997); 
console.log(Person2) 

//Method calculateAge() from prototype property is
// inherited by Person object
// Hence this givens person's age
Person1.calculateAge(); 
Person2.calculateAge(); 
