const { REFRESH_RATE, SECONDS } = require('../config');

const Dragon = require('../dragon')


const  refreshRate = REFRESH_RATE * SECONDS;





class Generation {
    constructor(){
        this.expiration = this.calculateExpiration();

        
    }

    calculateExpiration(){
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

        console.log('expiration period', expirationPeriod);
        

        const msUntilExpiration = Math.random() < 0.5 ? 
            refreshRate - expirationPeriod: 
            refreshRate + expirationPeriod;

       return new Date(Date.now() + msUntilExpiration);

        

    }

    newDragon(){
        if(Date.now() > this.expiration){
            throw new Error(`This Generation expired on ${this.expiration}`);
        }

        return new Dragon();
    }

}

module.exports = Generation