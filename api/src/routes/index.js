const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogsRoutes=require("./modulacionRutas/routesdogs")
const temperamentsRoutes=require("./modulacionRutas/routestempers")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs",dogsRoutes)
router.use("/temperament",temperamentsRoutes)

module.exports = router;
