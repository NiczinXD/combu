import mongoose from "mongoose";

const cicloSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    data: { type: String, required: true },
    periodo: { type: Number, required: true },
    kmPercorridos: { type: Number, required: true },
    consumo: { type: Number, required: true },
    vigente: { type: Boolean, required: true },
    precoLitro:  { type: Number, required: true },
    precoTotal: { type: Number, required: true },
    quantidadeLitros: { type: Number, required: true }
}, {versionKey: false});

const ciclo = mongoose.model("ciclos", cicloSchema);
export default ciclo;