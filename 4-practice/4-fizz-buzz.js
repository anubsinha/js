// Divisible by 3             => Fizz
// Divisible by 5             => Buzz
// Divisible by both 3 and 15 => FizzBuzz
// Not divisible by 3 or 5    => The number
// Not a number type          => Not a number

function fizzBuzz(number){
    if (typeof number !== 'number')
        return 'Not a number' ;
    else if ((number%5 === 0) && (number%3 === 0))
        return 'FizzBuzz';  
    else if (number%3 === 0)
        return 'Fizz';
    else if (number%5 === 0)
        return 'Buzz';    
    else    
        return number;
    }


console.log(fizzBuzz('3'));
console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(45));
console.log(fizzBuzz(16));
