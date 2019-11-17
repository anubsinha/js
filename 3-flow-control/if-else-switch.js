// How do we control the flow of our programs?
// 1. if-then-else
// 2. switch-case
// 3. for
// 4. while
// 5. continue or break

// 1. if-then-else
let option = 'here';

if (option === 'here') {
    console.log('I am here');
} else if (option === 'there') {
    console.log('I am there');
} else {
    console.log('Where am I?');
}

option = 'there';

switch (option) {
    case 'here':
        {
            console.log('I am here');
            break; // This is important else it will continue.
        };

    case 'there':
        {
            console.log('I am there');
            break;
        }

    default:
        {
            console.log('Where am I?');

        }

}
// if-elseif-else vs switch-case
// which one to use?
// Trade-offs
// if-else more readable for small number of options
// switch more performant for large number of options
// also, switch becomes more readable as option grows
// and when options are less if else performance is close to switch
// For small number options use if-else
// For large number of options use switch
// In my opinion if you end up using more than 1 else if
// good to use switch
// This strategy will always give you the best of 
// readability and performance all the time
// reference and more details are here
// https://www.oreilly.com/library/view/high-performance-javascript/9781449382308/ch04.html