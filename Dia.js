export class Dia{
    constructor(colunas){
        this.data = colunas[1];
        this.intervalo = Number(colunas[5]);
        this.dia = Number(colunas[6]);
        this.odometroInicial = Number(colunas[7].replace(/"/g, ''));
        this.odometroFinal = Number(colunas[8].replace(/"/g, ''));
        this.kmsPercorridos = Number(colunas[9].replace(/"/g, ''));
        this.kmsAcumulado = Number(colunas[10].replace(/"/g, ''));
    }
}