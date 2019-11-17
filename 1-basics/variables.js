// var name = 'Anub'; 
// Bad idea!!
// https://stackoverflow.com/questions/8862665/what-does-it-mean-global-namespace-would-be-polluted
// Better to use let for variable declaration in JS
let name = 'Anub';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstname, lastname;
let secondname = 'Kumar', thirdname;

// Modern best practices is to declare each variables in a separate line
let houseno = '136';
let address = 'BTM';
console.log(name, firstname, secondname, thirdname, houseno, address)
