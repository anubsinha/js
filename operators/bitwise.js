// 7. Bitwise (|, &)
let x = 1;       // 00000001
let y = 2;       // 00000010
let z = 3;       // 00000011
console.log(x|y);// 00000011 
console.log(x&z);// 00000001
// Application in implementing Access Control Permissions
const readPermission    = 1;     // 00000001
const writePermission   = 2;     // 00000010
const executePermission = 4;     // 00000100
let userPermission      = 0;     // 00000000
userPermission          = userPermission | readPermission 
console.log(userPermission);     // 00000111
console.log(userPermission&executePermission);
// ternary evaluates truethy or falsy on the conditional
let canExecute = userPermission&executePermission?'yes':'no';
console.log(canExecute);
userPermission          = userPermission | executePermission;
canExecute = userPermission&executePermission?'yes':'no';
console.log(canExecute);


