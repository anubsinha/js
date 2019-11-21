console.log(showNumbers(10));



function isEvenOrOdd(number){
    return (number%2 === 0) ? 'Even' : 'Odd';
}

function showNumbers(number){
    for (let i=0; i<= number; i++){
        console.log(i, isEvenOrOdd(i));
    }
}