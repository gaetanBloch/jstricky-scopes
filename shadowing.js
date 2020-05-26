const name = 'Gaetan';
// Syntax Error because 2 variables with the same name
// var name ='Sebastien';

function printAge() {
  // Variable shadowing
  let name = 'Sebastien';
  console.log(name);
}

printAge();
