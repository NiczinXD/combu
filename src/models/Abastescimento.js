import mongoose from "mongoose";


const abastecimentoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    data: { type: String, required: true },
    odometro: { type: Number, required: true },
    litros: { type: Number, required: true },
    preco: { type: Number, required: true },
    total: { type: Number, required: true },
    ciclo: { type: Number, required: true },
}, {versionKey: false});

const abastecimento = mongoose.model("abastecimento", abastecimentoSchema);
export default abastecimento;