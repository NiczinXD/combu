import CombuController from "./combuController.js";
import express from 'express';

const routes = express.Router();

routes.get('/busca', CombuController.busca.bind(CombuController));

export default routes;