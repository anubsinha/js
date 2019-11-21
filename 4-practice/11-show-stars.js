// showStars(5);
// *
// **
// ***
// ****
// *****

showStars(7);

function showStars(rows){
    let count = 1;
    
    while(count <= rows){
        let stars = '';
        for(let i=1; i <= count; i++){
            stars += '*';
        }
        console.log(stars);           
        count++;
    }

}