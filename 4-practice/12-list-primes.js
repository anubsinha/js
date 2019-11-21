console.log(listPrimes(10));

function listPrimes(limit){

    for (let i = 0; i <= limit; i++)
        if (isPrime(i))
            console.log(i);
        
        
}

function isPrime(number){
    if (number == 1) return false;
    if (number == 2) return true;
    let seekPosition = 2;
    let endPosition = number ;
    while (seekPosition != endPosition){
          if (number%seekPosition === 0)
            return false;
          else 
            seekPosition++;
    }
    return true;

}