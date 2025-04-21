const fs = require('fs');
const caminhoArquivo = './consumo.csv';
const pastaResultados = './resultado';

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
        
        const dia = {
            intervalo: Number(colunas[5]),
            data: colunas[1],
            dia: Number(colunas[6]),
            odometro: Number(colunas[7].replace(/"/g, '')),
            kmsDiaAnterior: Number(colunas[8].replace(/"/g, '')),
            kmsAcumulado: Number(colunas[9].replace(/"/g, '')),
        };

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