const pool = require('../../databasePool');

class GenerationTable{

    static storeGeneration(generation){
        pool.query('INSERT INTO generation(expiration) values($1)', [generation.expiration], 
        (error, response) => {
            if(error) return console.error(error);
            
        }
        );
    }
}

module.exports = GenerationTable