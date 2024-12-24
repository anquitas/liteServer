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


// ## GET: '/'
router.get(
  '/:id',
  async (req, res) => {
    // logla
    console.log('bok işletme')
    // bilgi çıkar
    const id = req.query.id
    // insert nesnesi oluştur
    const iletisim = {isim, soyisim, eposta, mesaj}
    // insert yap
    iletisim.create(iletisim)
  }
)

// ## GET: '?isletme&kategori'
router.get(
  '/',
  async () => {
    const {isletme, kategori} = req.query
    const kosullar = {}

    if (isletme) kosullar.isletme = isletme
    if (kategori) kosullar.kategori = kategori

    const user = await kullanici.findOne({ where: { eposta: eposta } });



  }
)

// ## GET: '?search'
router.get(
  '/search',
  (req, res) => {
    // get search term
    const serchT = req.query.search
    // make search
  }
)



// ## TESTS --- --- ---

//## EXPORTS --- --- ---
export default router

//## EXECUTION --- --- ---
