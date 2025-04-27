export class Dia{
    constructor(colunas){
        this.intervalo = Number(colunas[5]);
        this.data = colunas[1];
        this.dia = Number(colunas[6]);
        this.odometro = Number(colunas[7].replace(/"/g, ''));
        this.kmsDiaAnterior = Number(colunas[8].replace(/"/g, ''));
        this.kmsAcumulado = Number(colunas[9].replace(/"/g, ''));
    }
}