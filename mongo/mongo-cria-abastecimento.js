db.createCollection("abastecimento",
    {
        validator:{
            $jsonSchema:{
                bsonType: "object",
                required:[ "_id", "data", "preco", "total", "periodo" ],
                properties:{
                    _id:{
                        bsonType: "objectId",
                        description: "Informe corretamente o id"
                    },
                    data:{
                        bsonType: "string",
                        description: "informe corretamente a data"
                    },
                    preco:{
                        bsonType: "double",
                        description: "informe o preco corretamente"
                    },
                    total:{
                        bsonType: "double",
                        description: "Informe o total corretamente"
                    },
                    periodo:{
                        bsonType: "number",
                        description: "informe corretamente o periodo"
                    }
                }
            }
        }
    }
)
