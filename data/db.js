//## MODULE --- --- ---
const MODULE_NAME = 'db'

//## IMPORTS --- --- ---
import sequelize from './sequelize.js'
import initModels from '../models/init-models.js'


// ## FUNCTIONS --- --- ---

//## INITS --- --- ---
sequelize.sync().then( () => console.log('DB is ready') )
const models = initModels(sequelize)


//## CONSTANTS --- --- ---
let db = models

// ## MW DEFINITIONS --- --- ---

// ## MW MOUNTS --- --- ---

// ## TESTS --- --- ---

//## EXPORTS --- --- ---
export default db

//## EXECUTION --- --- ---
















