// 6. Logical (!, ||, && )
let x = true;
let y = false;
let z = !x;
console.log(z);
console.log(x || y);
console.log(x && y);
// Application
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log(eligibleForLoan);
console.log(applicationRefused);

// All is well when both the operands are boolean type
// Let's see when one of the operand becomes a non-boolean one
console.log(true || 'hi');
console.log(true || '');
console.log(false || 'hi');
console.log(false || '');
console.log('hi' || true);
console.log('' || true);
console.log('hi' || false);
console.log('' || false);
// Here is how it works:
// We have two kinds of value other than the strict booleans true and false
// truthy and falsy
// example those qualify as falsy values
// undefined, empty string '', Not a Number NaN, null, the number zero 0, false
// if you use first operand from any on the falsy values
// it will keep searching and move on to the second operand to figure out the
// value for the logical expression. Till it finds a truthy value it will keep the 
// search on. This is what we call short-circuiting
console.log(''||false||'hey'||'ho');
console.log(''||false||''||'ho');
// Application 
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);
userColor = '';
currentColor = userColor || defaultColor;
console.log(currentColor);
