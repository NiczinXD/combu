// NOME: app01.js
// OBJETIVO: Ler um arquivo CSV, processar os dados e salvar em um arquivo JSON.
// DATA: 16-04-2025
// VERSÃO: 1.0

import mongoose from 'mongoose';
import fs from 'fs';
import movimento from "./src/models/Movimento.js";
import readline from 'readline';

const caminhoArquivo = './consumo2.csv';
const pastaResultados = './resultado';

console.clear();

function perguntar(msg){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(msg, (resposta) => {
            rl.close();
            resolve(resposta.trim().toLowerCase());
        });
    });
}

async function conectaNaDatabase() {
    mongoose.connect("mongodb://127.0.0.1:27017/Combu");
    console.log("Conectado ao MongoDB com sucesso!");
    return mongoose.connection;
}
conectaNaDatabase();

const resposta1 = await perguntar(
    "Esse programa insere um arquivo CSV no MongoDB. Digite 'sim' para continuar e 9 para encerrar: "
);
if (resposta1 !== 's' && resposta1 !== 'sim') {
    console.log("End-of-job");
    process.exit(0);
}

function replaceCommaInQuotes(str) {
    return str.replace(/"[^"]*"/g, (match) => {
        return match.replace(/,/g, '.');
    });
}

async function main(){
    let arrayAux = [];
    fs.readFile(caminhoArquivo, 'utf-8', async (erro, texto) => {
        if (erro) {
            console.error('Erro ao ler o arquivo:', erro.message);
            return;
        }

        arrayAux = texto.trim().split('\n');

        const dias = [];

        // itera sobre as linhas do csv pegando apenas os dados necessarios
        for (let i = 1; i < arrayAux.length; i++) {
            const linha = replaceCommaInQuotes(arrayAux[i]);
            const colunas = linha.split(',');
            const Obj = {
                data: colunas[1],
                periodo: Number(colunas[5]),
                dia: Number(colunas[6]),
                odometroInicial: Number(colunas[7].replace(/"/g, '')),
                odometroFinal: Number(colunas[8].replace(/"/g, '')),
                kmPercorridos: Number(colunas[9].replace(/"/g, '')),
            }

            // cria um novo objeto do modelo movimento
            const dia = new movimento(Obj);
            dias.push(dia);
        }


        
        // insere todos os dados de "dias" no mongodb ao invés de criar um arquivo json
        try {
            const resposta2 = await perguntar(
                "Deseja deletar os arquivos já existentes no banco para repor com os novos? Digite 'sim' para concordar e 9 para discordar: "
            );
            if (resposta2 == 's' || resposta2 == 'sim') {
                await movimento.deleteMany({});
            }
            await movimento.insertMany(dias);
            console.log("Dados inseridos no MongoDB com sucesso!");
            mongoose.connection.close();
        } catch (err) {
            console.error("Erro ao salvar no MongoDB:", err);
        }
        const caminhoSaida = `${pastaResultados}/resultado.json`;
        fs.writeFile(caminhoSaida, JSON.stringify(dias, null, 2), (erro) => {
            if (erro) {
                console.error('Erro ao escrever o arquivo:', erro.message);
                return;
            }
            console.log('Arquivo JSON criado com sucesso!');
        });
    });
}
main();