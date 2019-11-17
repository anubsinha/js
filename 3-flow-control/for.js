// 3. for
// when you want to repeat doing something 
// till a condition satisfies
for(let i=0; i<5; i++){
    console.log('Hey, ho!')
}

let person = {
    name: 'Anub',
    age: 37
};
// when you want to iterate over an object
// use for-in construct
for(let key in person ){
    console.log(key, person[key]);
}

// when you want to iterate over an array or list of items
// use for-of construct
let colors = ['red', 'blue', 42];
for(let item of colors){
    console.log(item);
}