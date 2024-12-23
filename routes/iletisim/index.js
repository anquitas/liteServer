//## MODULE --- --- ---
const MODULE_NAME = 'name'

//## IMPORTS --- --- ---
import express from 'express'
import db from '../data/db.js'

// ## FUNCTIONS --- --- ---

//## INITS --- --- ---
const router = express.Router()

//## CONSTANTS --- --- ---
const iletisim = db.geribildirim // düzelt

// ## MW DEFINITIONS --- --- ---

// ## MW MOUNTS --- --- ---

router.post(
  'iletisim',
  async (req, res) => {
    // logla
    console.log('bok iletişim kurarsın')
    // bilgi çıkar
    const {isim, soyisim, eposta, mesaj} = req.body
    // insert nesnesi oluştur
    const iletisim = {isim, soyisim, eposta, mesaj}
    // insert yap
    iletisim.create(iletisim)
  }

)

// ## TESTS --- --- ---

//## EXPORTS --- --- ---
export default router

//## EXECUTION --- --- ---
