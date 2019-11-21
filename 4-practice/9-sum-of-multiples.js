// for input 10
// multiples of 3 = 3, 6, 9
// multiples of 5 = 5, 10
// sumOfMultiples(10) returns 33
console.log(sumOfMultiples(10));

function sumOfMultiples(limit){
    let count = 1;
    let sum = 0;
    
    while(count <= limit){
        if ((count % 3 === 0) || (count % 5 === 0))
            sum += count
        count ++;
    }

    return sum
}