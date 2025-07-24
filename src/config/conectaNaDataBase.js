import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb://127.0.0.1:27017/Combu");
    return mongoose.connection;
}


export default conectaNaDatabase;