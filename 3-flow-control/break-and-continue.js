// 5. continue or break

// use continue when you want to jump the iteration
// on some condition so to make a 
// custom pattern

// a list of odd numbers below 10
let i = 10;
while(i>0){
    if (i%2===0){
        i--;
        continue;
    }
    console.log(i);
    i--;
}

// use break when you want to stop iterating 
// over a list of items not known beforehand
// that is pulled dynamically
// and you want to stop the iteration on 
// some condition
let colors = ['red', 'blue', 'green', 'purple'];
for(let color of colors){
    if (color==='green'){
        break; 
        // if you see green color stop iterating and break out of the loop
    }
    console.log(color); // order is maintained
    
};