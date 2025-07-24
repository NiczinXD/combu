import mongoose from "mongoose";


const consumoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    idConsumo: { type: Number, required: true},
    data: { type: String, required: true },
    horas: { type: String, required: true },
    dia: { type: String, required: true },
    Intervalo: { type: Number, required: true },
    Dias: { type: Number, required: true },
    OdometroInicial: { type: String, required: true },
    OdometroFinal: { type: String, required: true },
    KmPercorridos: { type: String, required: true },
    KmAcumulado: { type: String, required: true }
}, {versionKey: false});

const consumo = mongoose.model("consumos", consumoSchema);
export default consumo;