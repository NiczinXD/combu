import consumo from "../models/Consumo.js";


class ConsumoController {
    static async busca(req, res){
        try {
            const lista = await consumo.find({});
            res.status(200).json(lista);
        } catch (error){
            res.status(500).json({ message: "Erro ao buscar dados"});
        }
    }
}

export default ConsumoController;