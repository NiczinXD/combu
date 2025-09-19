db.createCollection("ciclo", 
    {
        validator:{
            $jsonSchema: {
                bsonType: "object",
                required: [ "_id", "periodo", "kmPercorridos", "consumo" ],
                properties:{
                    _id:{
                        bsonType: "objectId",
                        description: "Informe corretamente o id"
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
                    } 
                }
            }
        }
    }
)
