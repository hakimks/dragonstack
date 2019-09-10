const pool =  require ('../../databasePool')
const DragonTraitTable = require('../dragonTrait/table')

class DragonTable{
    static storeDragon (dragon) {
        const {birthdate, nickname, generationId} = dragon;


        return new Promise((reject, resolve) => {
            pool.query(
                `INSERT INTO dragon(birthdate, nickname, "generationId") 
                VALUES($1, $2, $3) RETURNING id`, 
                [birthdate, nickname, generationId],
                (error, response) => {
                    if(error) return reject(error);

                    const dragonId = response.rows[0].id;

                    Promise.all(dragon.traits.forEach(({traitType, traitValue}) => {
                        DragonTraitTable.storeDragonTrait({
                            dragonId, traitType, traitValue
                        });
                    } ))
                    .then(()=> resolve({dragonId}))
                    .catch( error => reject(error));
                }
            )
        });
    }
}


module.exports = DragonTable