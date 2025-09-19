db.createCollection("movimento",
      {
           validator:{
                $jsonSchema:{
                    bsonType: "object",
                    required:[ "_id", "data", "periodo", "dia", "odometroInicial", "odometroFinal", "kmPercorrido"],
                    properties:{
                        _id:{
                            bsonType: "objectId",
                            description: "Informe corretamente o id"
                        },
                        data:{
                            bsonType: "string",
                            description: "informe corretamente a data"
                        },
                        periodo:{
                            bsonType: "number",
                            description: "informe corretamente o periodo"
                        },
                        dia:{
                            bsonType: "number",
                            description: "informe corretamente o dia"
                        },
                        odometroInicial:{
                            bsonType: "double",
                            description: "informe corretamente o odometro inicial"
                        },
                        odometroFinal:{
                            bsonType: "double",
                            description: "informe corretamente o odometro final"
                        },
                        kmPercorridos:{
                            bsonType: "double",
                            description: "informe corretamente os kms percorridos"
                        }
                }
            }              
        }
    }
)