import express from "express";
import conectaNaDatabase from "./config/conectaNaDataBase.js";
import routes from "./routes/index.js";
import cors from "cors";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    
    console.log("Conexão com o banco sendo feita com sucesso");
    // Verifica o nome do banco conectado
    console.log("Banco conectado:", conexao.name || conexao.db?.databaseName);
})


const app = express();
app.use(cors());
routes(app);

export default app;