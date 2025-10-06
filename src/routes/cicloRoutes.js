import express from 'express';
import CicloController from "../controllers/cicloController.js";

const router = express.Router();

router.post('/ciclos', CicloController.cadastrar);
router.get('/ciclos', CicloController.busca);

export default router;