const pool = require('../../databasePool');

class GenerationTable{


    static storeGeneration(generation){

        return new Promise((resolve, reject)=> {
            pool.query(
                'INSERT INTO generation(expiration) values($1) RETURNING id', 
                [generation.expiration], 
                (error, response) => {
                    if(error) return reject(error);
            
                    const generationId = response.rows[0].id;

                    resolve({generationId});
                }
            );

        });
        
    }
}

module.exports = GenerationTable