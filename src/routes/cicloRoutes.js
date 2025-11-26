import express from 'express';
import CicloController from "../controllers/cicloController.js";

const router = express.Router();

router.post('/ciclos', CicloController.cadastrar);
router.get('/ciclos', CicloController.busca);
router.get('/ciclos/:id', CicloController.buscaPorId);
router.delete('/ciclos/:id', CicloController.exclui);

export default router;