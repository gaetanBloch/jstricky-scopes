// Global Scope
var globalAge = 31;

function greet() {
  // Local Scope
  var localName = 'Gaetan';
  console.log('Hello ' + localName);
}

console.log(globalAge);

greet();


