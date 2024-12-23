//## MODULE --- --- ---
const MODULE_NAME = 'server'

//## IMPORTS --- --- ---
import express, { response } from 'express'

import sequelize from '../../data/sequelize.js'
import initModels from '../../models/init-models.js'

import db from '../../data/db.js'



// ## FUNCTIONS --- --- ---

//## INITS --- --- ---
const router = express.Router()
// sequelize.sync().then( () => console.log('DB is ready') )

// const models = initModels(sequelize)
// const kullanici = models.kullanici
const kullanici = db.kullanici

//## CONSTANTS --- --- ---

// ## MW DEFINITIONS --- --- ---

// ## MW MOUNTS --- --- ---

// ## GET: 'kullanicilar'
router.get(
  '/test',
  async (req, res) => {
    const Kullanici = await kullanici.findAll()
    console.log('+ all users are being sent')
    console.log('tablo: ', Kullanici)
    res.send(Kullanici)
  }
)


router.get(
  '/:id',
  async (req, res) => {
    const userId = req.params.id
    const user = await kullanici.findByPk(userId);
    const {isim, soyisim} = user
    res.json({isim: isim, soyisim: soyisim})
  }
)




// ## POST: '/signup'
router.post(
  '/signup',
  async (req, res) => {
    // refactor yap, validator ekle

    // loglama
    console.log('bok üye olursun')

    // bilgi çıkarma, decons
    const {isim, soyisim, eposta, parola} = req.body

    // validasyon
    if (!isim || !soyisim || !eposta || !parola) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // ekleme
    const newUser = await kullanici.create({
      isim,
      soyisim,
      eposta,
      parola,
    })

    // cevap
    res.send(newUser)
  }
)


// ## POST: '/'
router.post(
  '/login',
  async (req, res) => {
    //loglama
    console.log('bok giriş yaparsın')

    // bilgi çıkarma
    const {eposta, parola} = req.body

    //validasyon
    if (!eposta || !parola) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // kullanıcıya bak
    const user = await kullanici.findOne({ where: { eposta: eposta } });
    console.log('USER: ', user)
    if(user) {
      res.json(user)
    }
    else {
      res.json({bok: 'bok'})
    }
  }
)



// ## TESTS --- --- ---

//## EXPORTS --- --- ---
export default router

//## EXECUTION --- --- ---

