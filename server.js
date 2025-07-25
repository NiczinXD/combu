import express from 'express';
import routes from './routes.js';

const app = express();
const PORT = 3000;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});