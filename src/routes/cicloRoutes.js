import express from 'express';
import CicloController from "../controllers/cicloController.js";

const router = express.Router();

router.post('/cadastro', CicloController.cadastrar);

export default router;