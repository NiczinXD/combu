## Projeto: Combu [Controle de combustível]	
#### Projeto : combu

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
        "periodo": 20,
        "kmPercorridos": 0.0,
        "consumo": 0.0,
        "vigente": true,
        "precoLitro": 5.98,
        "precoTotal": 204.61,
        "quantidadeLitros": 34.21
    }
```