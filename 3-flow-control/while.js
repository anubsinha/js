// 4. while

// simple while
// when the variable on which 
// we are running a condition
// lives out of scope of the repeat code
// use for when the variable has to reside 
// inside the scope of the repeat code

let i = 2;
while(i<5){
    console.log(i);
    i++;
};

// when you want the section of code to execute atleast once. 
let j = 6;
do {
    console.log(j);
}
while (j<5) {
    j++;
}

//  infinite loops
//  while (true){
//    doSomething();
//    }

// beware of landing on unintended infinite loops
// when using the for and while constructs