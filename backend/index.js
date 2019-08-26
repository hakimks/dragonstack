const Generation = require('./generation');

const generation = new Generation();

console.log('generation', generation);

const goofy = generation.newDragon();

console.log('goofy', goofy);

setTimeout(()=>{
    const mimar = generation.newDragon();
    console.log("mimar", mimar);
    
}, 15000);


