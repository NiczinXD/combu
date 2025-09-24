import mongoose from "mongoose";

const movimentoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    data: { type: String, required: true },
    periodo: { type: Number, required: true },
    dia: { type: Number, required: true },
    odometroInicial: { type: mongoose.Schema.Types.Decimal128, required: true },
    odometroFinal: { type: mongoose.Schema.Types.Decimal128, required: true },
    kmPercorridos: { type: mongoose.Schema.Types.Decimal128, required: true },
}, {versionKey: false});

const movimento = mongoose.model("movimento", movimentoSchema);
export default movimento;