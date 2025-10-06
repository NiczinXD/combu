db.createCollection("ciclo", 
    {
        validator:{
            $jsonSchema: {
                bsonType: "object",
                required: [ "_id", "data", "periodo", "kmPercorridos", "consumo", "vigente", "precoLitro", "precoTotal" ],
                properties:{
                    _id:{
                        bsonType: "objectId",
                        description: "Informe corretamente o id"
                    },
                    data:{
                        bsonType: "string",
                        description: "Informe corretamente a data"
                    },
                    periodo:{
                        bsonType: "number",
                        description: "informe corretamente o periodo"
                    },
                    kmPercorridos:{
                        bsonType: "double",
                        description: "informe corretamente os kms percorridos"
                    },
                    consumo:{
                        bsonType: "double",
                        description: "informe corretamente o consumo"
                    },
                    vigente:{
                        bsonType: "boolean",
                        description: "informe corretamente o vigente"
                    },
                    precoLitro:{
                        bsonType: "Number",
                        description: "informe corretamente o preco"
                    },
                    precoTotal:{
                        bsonType: "Number",
                        description: "informe corretamente o preco"
                    },
                    quantidadeLitros:{
                        bsonType: "Number",
                        description: "informe corretamente os litros"
                    }
                }
            }
        }
    }
)