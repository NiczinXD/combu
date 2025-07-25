import express from 'express';
import ConsumoController from "../controllers/consumoController.js";

const router = express.Router();

router.get('/busca', ConsumoController.busca);
//router.get('/busca/:Dias', ConsumoController.buscaPorDias);
//router.get('/busca/:id', ConsumoController.buscaPorId)

export default router;