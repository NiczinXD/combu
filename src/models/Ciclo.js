import mongoose from "mongoose";


const cicloSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    periodo: { type: Number, required: true },
    kmPercorridos: { type: mongoose.Schema.Types.Decimal128, required: true },
    consumo: { type: mongoose.Schema.Types.Decimal128, required: true },
}, {versionKey: false});

const ciclo = mongoose.model("ciclo", cicloSchema);
export default ciclo;