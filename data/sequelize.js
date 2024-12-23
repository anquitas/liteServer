// ## IMPORTS --- --- ---
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Sequelize } = require('sequelize')


const config = {
  databese: 'database',
  username: 'star',
  password: ''
}

// ## INITS --- --- ---
const sequelize = new Sequelize(
  'database', 
  'star',
  '',
  {
    dialect: 'sqlite',
    host: './data/database.sqlite'
  }
)

// ## EXPORTS --- --- ---
// module.exports = sequelize
export default sequelize