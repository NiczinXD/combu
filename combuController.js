import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const nomeBanco = 'Combu';
const nomeColecao = 'consumo';

class CombuController {
    static async busca(req, res) {
        const query = req.query.query;

        if (!query) {
            return res.status(400).json({ erro: 'Parâmetro query é obrigatório' });
        }

        const client = new MongoClient(uri);

        try {
            await client.connect();
            const db = client.db(nomeBanco);
            const colecao = db.collection(nomeColecao);

            const filtro = { Dias: Number(query) }; 
            const resultados = await colecao.find(filtro).toArray();

            const resposta = resultados.map(doc => ({
                data: doc.data || doc.Data,
                intervalo: doc.intervalo || doc.Intervalo || doc["Intervalo"],
                kmAcumulado: doc.kmAcumulado || doc.KmAcumulado || doc["Km Acumulado"]
            }));

            res.json(resposta);
        } catch (erro) {
            console.error("Erro ao buscar dados:", erro);
            res.status(500).json({ erro: 'Erro interno ao buscar dados' });
        } finally {
            await client.close();
        }
    }
}

export default CombuController;