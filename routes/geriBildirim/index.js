//## MODULE --- --- ---
const MODULE_NAME = 'geribildirim'

//## IMPORTS --- --- ---
import express from 'express'

// ## FUNCTIONS --- --- ---

//## INITS --- --- ---
const router = express.Router()

//## CONSTANTS --- --- ---

// ## MW DEFINITIONS --- --- ---

// ## MW MOUNTS --- --- ---

//## GET: 
router.get(
  'geribildirim',
  (req, res) => {
    const {urun} = req.query
  }
)

// ## TESTS --- --- ---

//## EXPORTS --- --- ---

//## EXECUTION --- --- ---
