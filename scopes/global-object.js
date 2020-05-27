var globalName = 'Gaetan';

console.log('[this] ' + this.globalName);
console.log('[self] ' + self.globalName);

const localName = 'Gaetan';

// Undefined because localName does not belong to the Global Object
console.log('[this] ' + this.localName);
console.log('[self] ' + self.localName);

function globalPrintAge(prefix) {
  console.log(prefix + ' I am 31 years old');
}

this.globalPrintAge('[this]');
self.globalPrintAge('[self]');

const localPrintAge = (prefix) => {
  console.log(prefix + ' I am 31 years old');
}

localPrintAge('[local]');

// Error because localPrintAge is undefined
// this.localPrintAge('[this]');
// self.localPrintAge('[self]');
