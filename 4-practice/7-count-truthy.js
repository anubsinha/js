const elements = ['', 2, 3];

console.log(countTruthy(elements));

function countTruthy(anArray){
    let count = 0;
    for (let element of anArray){
        if(element) count++;
    }
    return count

}

// Falsy values are
// undefined
// null
// ''
// 0
// NaN
// false