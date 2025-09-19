import mongoose from "mongoose";


const abastecimentoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    data: { type: String, required: true },
    preco: { type: mongoose.Schema.Types.Decimal128, required: true },
    total: { type: mongoose.Schema.Types.Decimal128, required: true },
    periodo: { type: Number, required: true },
}, {versionKey: false});

const abastecimento = mongoose.model("abastecimento", abastecimentoSchema);
export default abastecimento;