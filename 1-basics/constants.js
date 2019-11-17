let fluxRate = 0.4;
fluxRate = 3;
console.log(fluxRate); // Outputs 3
// const for assignments which are meant to be overidden
const interestRate = 0.3;
interestRate = 1; // Throws error!
console.log(interestRate); // Never reaches here