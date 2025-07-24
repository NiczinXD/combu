import express from 'express';
import ConsumoController from "../controllers/consumoController.js";

const router = express.Router();

router.get('/busca', ConsumoController.busca);

export default router;