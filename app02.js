// NOME: app02.js
// OBJETIVO: Importar coleção "Movimentos" de um arquivo cvs.
// DATA: 26-09-2025
// VERSÃO: 1.0

import mongoose from 'mongoose';
import fs from 'fs';
import movimento from "./src/models/Movimento.js";
import conectaNaDatabase from './src/config/conectaNaDataBase.js';
import { pula } from './src/app00.js';
import read from 'readline-sync';
import "colors";
const caminhoArquivo = './consumo2.csv';

console.clear();

async function aguardaConexao(conexao) {
    return new Promise((resolve, reject) => {
        conexao.once("open", () => {
            pula();
            console.log("Conexão com o banco sendo feita com sucesso");
            console.log("Banco conectado:", conexao.name || conexao.db?.databaseName);
            pula();
            resolve();
        });
        conexao.on("error", (erro) => {
            console.error("erro de conexão", erro);
            reject(erro);
        });
    });
}

console.log("I M P O R T A R   C O L E Ç Ã O  'Movimentos'  D E  UM  .CVS".red);
pula();

let resposta = read.question("Digite 's' para continuar: ");

if (resposta.toLowerCase() !== 's') {
    console.log("End-of-job".green);
    process.exit(0);
}

const conexao = await conectaNaDatabase();
await aguardaConexao(conexao);


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
            console.log("Deseja limpar a coleção Movimentos antes desta inserção?".yellow);
            pula();
            resposta = read.question("Digite 's' ou 9 para encerrar: ");

            if (resposta.toLowerCase() == 's') {
                await movimento.deleteMany({});
            }
            if (resposta == '9') {
                console.log("End-of-job".green);
                process.exit(0);
            }
            await movimento.insertMany(dias);
            console.log("Dados inseridos no MongoDB com sucesso!".green);
            pula();
            console.log("End-of-job".green);
            mongoose.connection.close();
        } catch (err) {
            console.error("Erro ao salvar no MongoDB:", err);
        }
    });
}
main();