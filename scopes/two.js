console.log('[global] ' + globalMyName);
console.log('[this] ' + this.globalMyName);
console.log('[self] ' + self.globalMyName);

// Available because there is no file specific scope
console.log('[global] ' + localMyName);
// Undefined because Global Object
console.log('[this] ' + this.localMyName);
console.log('[self] ' + self.localMyName);
