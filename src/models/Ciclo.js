import mongoose from "mongoose";


const cicloSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    data: { type: String, required: true },
    periodo: { type: Number, required: true },
    kmPercorridos: { type: mongoose.Schema.Types.Decimal128, required: true },
    consumo: { type: mongoose.Schema.Types.Decimal128, required: true },
    vigente: { type: Boolean, required: true }
}, {versionKey: false});

const ciclo = mongoose.model("ciclos", cicloSchema);
export default ciclo;