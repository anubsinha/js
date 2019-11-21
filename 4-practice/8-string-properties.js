
let movie = {
    name: 'I am legend',
    actor: 'Will Smith',
    release: 2007

};
stringProperties(movie);

function stringProperties(object){
    for (let key in object){
        if (typeof object[key] == 'string')
            console.log(key, ': ', object[key]);
    }
}