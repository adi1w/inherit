///ANS1///


// Parent object constructor
function Parent() {}

// Method attached to the parent object
Parent.prototype.parentMethod = function() {
  console.log("This is a method defined in the parent object.");
};

// Child object constructor
function Child() {}

// Inheriting from the parent object
Child.prototype = Object.create(Parent.prototype);

// Creating an instance of the child object
var childObject = new Child();

// Using the method from the parent object through the child object
childObject.parentMethod(); // Output: "This is a method defined in the parent object."



//ANS2//

// Parent object constructor
function Parent() {
    this.parentProperty = "Parent Property";
  }
  
  // Method attached to the parent object
  Parent.prototype.parentMethod = function() {
    console.log("This is a method defined in the parent object.");
  };
  
  // Child object constructor
  function Child() {
    this.childProperty = "Child Property";
  }
  
  // Inheriting from the parent object
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  
  // Method attached to the child object
  Child.prototype.childMethod = function() {
    console.log("This is a method defined in the child object.");
  };
  
  // Creating an instance of the child object
  var childObject = new Child();
  
  // Accessing properties and methods using the prototype chain
  console.log(childObject.childProperty); 
  console.log(childObject.parentProperty); 
  childObject.childMethod(); 
  childObject.parentMethod(); 

  
//ANS3//
// Adding a method to the Array prototype
Array.prototype.calculateSum = function() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  };
  
  // Creating multiple arrays
  var array1 = [1, 2, 3, 4, 5];
  var array2 = [10, 20, 30];
  var array3 = [2, 4, 6, 8, 10, 12];
  
  // Calculating the sum using the method from the Array prototype
  var sum1 = array1.calculateSum();
  var sum2 = array2.calculateSum();
  var sum3 = array3.calculateSum();
  
  console.log(sum1); 
  console.log(sum2); 
  console.log(sum3); 
  
  //ANS4//
  function getAllPropertyNames(obj) {
    var propertyNames = [];
  
    // Retrieve own property names
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        propertyNames.push(prop);
      }
    }
  
    // Retrieve inherited property names
    var prototype = Object.getPrototypeOf(obj);
    if (prototype !== null) {
      var inheritedPropertyNames = getAllPropertyNames(prototype);
      propertyNames = propertyNames.concat(inheritedPropertyNames);
    }
  
    return propertyNames;
  }
  
  // Example usage
  var obj = {
    name: "John",
    age: 30
  };
  
  function Person() {
    this.gender = "Male";
  }
  Person.prototype = obj;
  
  var person = new Person();
  person.city = "New York";
  
  var propertyNames = getAllPropertyNames(person);
  console.log(propertyNames);
  