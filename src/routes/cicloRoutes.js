import express from 'express';
import CicloController from "../controllers/cicloController.js";

const router = express.Router();

router.post('/ciclo', CicloController.cadastrar);
router.get('/ciclo', CicloController.busca);

export default router;