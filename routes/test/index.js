//## MODULE --- --- ---
const MODULE_NAME = 'test'

//## IMPORTS --- --- ---
import express from 'express'


//## INITS --- --- ---
const router = express.Router()

//## CONSTANTS --- --- ---


//## MW MOUNTS --- --- ---


//## GET: '/'
router.get(
  '/',
  (req, res) => {
    res.send('test route get request')
  }
)



// ## TESTS --- --- ---

//## EXPORTS --- --- ---
export default router

//## EXECUTION --- --- ---
