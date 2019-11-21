// Find average of the input array [100, 80, 90]
// 0-59  : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100: A
const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks){
   
    let average = calculateAverage(marks);
    if (average <   60) return 'F';
    if (average <   70) return 'D';
    if (average <   80) return 'C';
    if (average <   90) return 'B';
    if (average <= 100) return 'A';

}

function calculateAverage(array){
    const number = array.length;
    let sum = 0;
    for(let element of array){
        sum += element;
    }
    const average = sum/number;
    return average;
}