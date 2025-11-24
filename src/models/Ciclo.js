import mongoose from "mongoose";

const cicloSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    data: { type: String, required: true },
    ciclo: { type: Number, required: true },
    vigente: { type: Boolean, required: true },
    odometroInicial: { type: Number, required: true },
    odometroFinal: { type: Number, required: true },
    kmPercorridos: { type: Number, required: true },
    autonomiaPrevistaProximoCiclo: { type: Number, required: true },
    consumo:  { type: Number, required: true },
}, {versionKey: false});

const ciclo = mongoose.model("ciclos", cicloSchema);
export default ciclo;