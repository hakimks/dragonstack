const Dragon = require('./dragon.js');

const fooey = new Dragon({
    birthdate: new Date(), 
    nickname: 'fooey'
});
const baloo = new Dragon({
    birthdate: new Date(), 
    nickname: 'baloo'
});

setTimeout(() => {
    const goody = new Dragon();
    console.log('goody', goody);
    
}, 3000);

const mimar =  new Dragon();
console.log('fooey', fooey);
console.log('baloo', baloo);
console.log('mimar', mimar);


