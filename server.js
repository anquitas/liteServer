//## MODULE --- --- ---
const MODULE_NAME = 'server'


//## IMPORTS --- --- ---
import express from 'express' // route import


import bodyParser from 'body-parser' 
import requesLog from './middlewares/requestLog.js'
// const url = require('url')  //middle-ware


 


//## INITS --- --- ---
const app = express()





//## CONSTANTS --- --- ---
import {PORT} from './constant/server_C.js' 



//## MW MOUNTS --- --- ---
app.use(requesLog)
app.use(bodyParser.json())



//## ROUTES  --- --- ---
import testRoute from './routes/test/index.js' // route import
app.use('/api/test', testRoute)

import kullaniciRoute from './routes/kullanici/index.js' // route import
app.use('/api/kullanici', kullaniciRoute)



//## GET '/'
app.get(
  '/',
  (req,res) => res.send('welcome to the litesunucu') 
)



//## EXECUTION --- --- ---
app.listen(
  PORT,
  _ => console.log(`server is running on port ${PORT}`)
)
