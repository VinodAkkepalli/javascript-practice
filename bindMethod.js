// bind() method returns a new function, where the value of 
// “this” keyword will be bound to the owner object,
// which is provided as a parameter.

var bikeDetails = {
    displayDetails: function(registrationNumber, brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
    
var person1 = {name:  "Vivek"};

// Binds the displayDetails function to the person1 object
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
        
console.log(detailsOfPerson1());