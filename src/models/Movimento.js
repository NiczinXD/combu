import mongoose from "mongoose";

const movimentoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    data: { type: String, required: true },
    ciclo: { type: Number, required: true },
    dia: { type: Number, required: true },
    odometroInicial: { type: Number, required: true },
    odometroFinal: { type: Number, required: true },
}, {versionKey: false});

const movimento = mongoose.model("movimento", movimentoSchema);
export default movimento;