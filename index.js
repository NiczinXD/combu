import fs from 'fs';
const caminhoArquivo = './consumo2.csv';
const pastaResultados = './resultado';

import {Dia}  from "./Dia.js";

function replaceCommaInQuotes(str) {
    return str.replace(/"[^"]*"/g, (match) => {
        return match.replace(/,/g, '.');
    });
}

let arrayAux = [];
fs.readFile(caminhoArquivo, 'utf-8', (erro, texto) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro.message);
        return;
    }

    arrayAux = texto.trim().split('\n');

    const dias = [];

    for (let i = 1; i < arrayAux.length; i++) {
        const linha = replaceCommaInQuotes(arrayAux[i]);
        const colunas = linha.split(',');

        const dia = new Dia(colunas);
        dias.push(dia);
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