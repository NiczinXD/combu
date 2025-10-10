## Desafios: Exercícios
#### Projeto : combu

*Uso do Node.js*

#### comandos necessários:

## para poder abrir o servidor local ->
```
npm run dev
```

## Para importar a coleção “Movimentos” para o MongoDB ->
```
node app02
```
## para poder baixar o arquivo do projeto em JSON ->
```
node app01
```

## rotas ->
```
get http://localhost:3000/ciclos; get http://localhost:3000/busca;
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