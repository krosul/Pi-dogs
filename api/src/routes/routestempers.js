const { default: axios } = require('axios');
const { Router } = require('express');
const { Temper } = require("../db")
const { API_KEY } = process.env
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res, next) => {
    try {

        let temperaments = await Temper.findAll()
        if (temperaments[0] !== undefined) res.send({ dataFromDb: temperaments })
        const datos = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        let temperFinal = datos.data.map(e => {
            return e.temperament === undefined ? null : e.temperament.split(",")
        }).filter(e => e)
        temperFinal = [...new Set(temperFinal.map(e => e[0]))]
        await temperFinal.forEach(e => {
            Temper.create({
                name: e
            })
        })

        res.send({ dataFromApi: temperFinal })
    } catch (error) { next(error) }
})

module.exports = router;