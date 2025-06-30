import { Dia } from "./Dia";
import fs from 'fs';
const caminhoArquivo = './consumo2.csv';

class CombuController {
    
    static async parseDiasFromCSV() {
        const texto = fs.readFileSync(caminhoArquivo, 'utf-8');
        const linhas = texto.trim().split('\n');
        const dias = [];
        for (let i = 1; i < linhas.length; i++) {
            const linha = replaceCommaInQuotes(linhas[i]);
            const colunas = linha.split(',');
            const dia = new Dia(colunas);
            dias.push(dia);
        }
        return dias;
    }

    static async replaceCommaInQuotes(str) {
        return str.replace(/"[^"]*"/g, (match) => {
            return match.replace(/,/g, '.');
        });
    }

    static async busca(req, res) {
        const query = req.query.query;
        if (!query) {
            return res.status(400).json({ erro: 'Parâmetro query é obrigatório' });
        }
        const dias = parseDiasFromCSV();
        const resultado = dias
        .filter(d => d.dia === Number(query))
        .map(d => ({
            data: d.data,
            intervalo: d.intervalo,
            kmAcumulado: d.kmsAcumulado
        }));

        res.json(resultado);
    }
}

export default CombuController;