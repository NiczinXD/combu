import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.CONEXAO_MONGO);
    return mongoose.connection;
}


export default conectaNaDatabase;