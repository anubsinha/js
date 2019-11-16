// Value types like primitives string, number, boolean, null, undefined
// Reference types like objects, arrays and functions
let person = {
    name: 'Anub',
    age: 37
};
// that was an object literal
console.log(person.name);
person.name = 'Anubhav';
console.log(person.name);
let key = 'name';
console.log(person[key]);
person[key] = 'Anub';
console.log(person.name);