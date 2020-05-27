// Calling the functions before it was declared
greet();
printInfo();

function greet() {
  console.log('Hi there!');
}

// Variable is declared after it is assigned
name = 'Gaetan';
console.log(name);

var name;

function printInfo() {
  // hobbies is undefined because it is declared but defined after the call
  console.log(hobbies);
  var hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

// DECLARATION IS HOISTED BUT NOT DEFINITION
