// You have a point with co-ordinates x and y.
// Write a function to swap the co-ordinates.

function swap(point){
    let temp = point.x;
    point.x = point.y;
    point.y = temp;
}
let point = {
    x: 3,
    y: 4
};

console.log('x=', point.x, 'y=', point.y);
swap(point);
console.log('x=', point.x, 'y=', point.y);