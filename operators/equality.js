// 4. Equality (===, ==)

// === is called strict equality operator
let x = 1;
let y = 1;
let z = '1';
console.log(x===y);
console.log(z===y);

// == is called lose equality operator, is difficult to predict so never use it
console.log(z==y); 
// == takes left operand type and typecasts right operand to match the left operand type
// true == 0 will give false
// true == 1 will give true
// true == 4 will give false
console.log(true==0);
console.log(true==1);
console.log(true==4);
console.log('1'==1);
console.log('1'==4);
