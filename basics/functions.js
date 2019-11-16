function printCards(){
    // This is function of type 1
    // just performing a task = type 1
    console.log('Here are the cards!');
};

function isReady(){
    // This is function of type 2
    // calculating and returning something, so we can use to initialise a variable
    // the return can be used as a expression
    return true;
};

function sayHello(name){
    // name is the parameter
    console.log('hello, ' + name);
};

console.log(sayHello('Anub'));//'Anub' is the argument to parameter name
