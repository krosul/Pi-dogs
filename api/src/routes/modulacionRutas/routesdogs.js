const { Router } = require('express');
const funcionality = require("./funcionalityDogs")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { API_KEY } = process.env

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res, next) => {
    try {

        res.status(200).send(await funcionality.getAllDogs())

    } catch (err) { next(err) }
})
router.post("/dog", async (req, res, next) => {
    try {
        const { name, height, weight, life_span, temper } = req.body
        res.status(200).send(await funcionality.postDog(name, height, weight, life_span, temper))

    } catch (error) { next(error) }
})
router.get("/breed", async (req, res, next) => {
    try {

        const { name } = req.query
        const dog = await funcionality.getByName(name)
        res.status(200).send(dog)
    } catch (error) {
        next(error)
    }

})
router.get("/:idRaza", async (req, res, next) => {
    try {

        const { idRaza } = req.params
        res.send(await funcionality.getDogById(idRaza))
    } catch (error) {
        next(error)
    }

})

module.exports = router;