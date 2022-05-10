const { Router } = require('express');
const funcionality = require("./funcionalityTempers")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", async (req, res, next) => {
    try {
        res.status(200).send(await funcionality.getTemperaments())
        } catch (error) { next(error) }
})

module.exports = router;