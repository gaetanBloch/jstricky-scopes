// Block scope, similar to Global Scope
const globalName = 'Sebastien';

if (true) { // This is a Block
  // Global Scope
  var globalAge = 31;
  // Block Scope
  let blockAge = 32;
  console.log(blockAge);
  console.log(globalName);
}

{ // This is a Block
  // Block Scope
  const blockName = 'Gaetan';
  console.log(blockName);
}

console.log(globalAge);

// Reference Error because defined in the Block Scope
// console.log(blockAge);

// Reference Error because defined in the Block Scope
// console.log(blockName);
