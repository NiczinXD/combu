import consumo from "../models/Consumo.js";


class ConsumoController {
    static async busca(req, res){
        const query = req.query.query;
        try {
            const consumos = await consumo.find({ Dias: query });
            const resultado = consumos.map(d => ({
                data: d.data,
                intervalo: d.Intervalo,
                kmAcumulado: d.KmAcumulado,
                dias: d.Dias,
            }))

            res.json(resultado);
        } catch (error){
            res.status(500).json({ message: "Erro ao buscar dados"});
        }
    }
}

export default ConsumoController;