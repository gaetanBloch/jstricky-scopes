// Global Scope
var globalAge = 31;

function greet() {

  // Local Scope (function Scope)
  var localName = 'Gaetan';

  function printInfo() {
    console.log('Hello ' + localName);
    // Can access because in the Global Scope
    console.log(`I am ${globalAge} years old`);

  }

  printInfo();
}

console.log(globalAge);

// Reference Error because defined in the Local Scope
// console.log(localName);

greet();


