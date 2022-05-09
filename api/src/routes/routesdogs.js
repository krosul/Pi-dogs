const { Router } = require('express');
const axios = require("axios")
const { Race } = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res, next) => {
    const dogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    res.status(200).send(dogs.data)
    // console.log(dogs)
    // res.status(200).json("ruta")
})
router.post("/dog", (req, res, next) => {
    try {
        const { name, height, weight, life_span } = req.body
        if (!name || !height || !weight || !life_span) throw new Error("faltan parametros a ingresar")
        Race.create({name,height,weight,life_span})
        .then(data=>res.status(200).json(data))
        .catch(error=>next(error))
    } catch (error) { next(error) }
})
router.get("/race", async (req, res, next) => {
    try {

        const { name } = req.query
        console.log(typeof name)
        const dog = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        console.log(dog)
        res.status(200).send(dog.data.length > 0 ? dog.data : "No hay perror de esa raza")
    } catch (error) {
        next(error)
    }

})
router.get("/:idRaza", async (req, res, next) => {
    try {

        const { idRaza } = req.params
        const dog = await Race.findbyPk(idRaza)
    } catch (error) {
        next(error)
    }

})

module.exports = router;