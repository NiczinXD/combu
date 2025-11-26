## Projeto: Combu [Controle de combustível]	

*Uso do Node.js*

#### comandos necessários:

## Executar a API ->
```
npm run dev
```

## Importar coleção "Movimentos" de um arquivo CSV ->
```
node app02
```
## Ler um arquivo CSV, processar os dados e salva em um arquivo JSON ->
```
node app01
```

## rotas ->
```
get http://localhost:3000/ciclos;
```
```
get http://localhost:3000/busca;
```
```
post http://localhost:3000/ciclos;
```
```
exemplo para inserir no post:
    {
        "data": "2025-10-28",
        "ciclo": 2,
        "vigente": true,
        "odometroInicial": 24,
        "odometroFinal": 69,
        "kmPercorridos": 2313132131313213132131,
        "autonomiaPrevistaProximoCiclo": 8,
        "consumo": 2132131313132131313131
    } 
```