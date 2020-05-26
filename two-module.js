
// Reference Error because of modules

console.log('[global] ' + globalMyName);
console.log('[this] ' + this.globalMyName);
console.log('[self] ' + self.globalMyName);

console.log('[global] ' + localMyName);
console.log('[this] ' + this.localMyName);
console.log('[self] ' + self.localMyName);
