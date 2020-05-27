for (var i = 0; i < 2; i++) {
  console.log(i);
}

// Variable i is available because of Global Scope
console.log(i);

for (let j = 0; j < 2; j++) {
  console.log(j);
}

// Reference Error because Block Scope
// console.log(j);

try {
  throw new Error();
} catch (error) {
  console.log(error);
}

// Reference Error because of try / catch own Scope
// console.log(error);

function print(age) {
  console.log('I am ' + age);
}

print(31);

// Reference Error because Function Scope
// console.log(age);
