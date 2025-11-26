import mongoose from "mongoose";
import ciclo from "../models/Ciclo.js";

class CicloController {
    static async cadastrar(req, res){
        try {
            const novoCiclo = await ciclo.create(req.body);
            res.status(201).json("ciclo cadastrado com sucesso: ", novoCiclo);
        } catch (error){
            res.status(500).json({ message: "Erro ao cadastrar ciclo"});
        }
    };
    static async busca(req, res){
        try {
            const ciclos = await ciclo.find({});
            res.json(ciclos);
        } catch (error){
            res.status(500).json({ message: "Erro ao buscar dados"});
        }
    };
    static async exclui (req, res) {
        try {
        const id = req.params.id;

        const cicloResultados = await ciclo.findByIdAndDelete(id);
        if(cicloResultados !== null){
            res.status(200).json({ message: "ciclo excluido" });
        } else {
            res.status(404).json({message: `Id do ciclo não localizado`})
        }

        } catch (erro) {
            if (erro instanceof mongoose.Error.CastError){
                res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"})
            }
            res.status(500).send({message: "Erro interno de servidor"})
        }
    };
    static async buscaPorId(req, res){
        try {
            const id = req.params.id;

            const cicloResultados = await ciclo.findById(id)
            if (cicloResultados !== null){
                res.status(200).json(cicloResultados)
            } else {
                res.status(404).json({message: `Id do ciclo não localizado`})
            }

        } catch (erro) {
            if (erro instanceof mongoose.Error.CastError){
                res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos"})
            }
            res.status(500).send({message: "Erro interno de servidor"})
        }
    }
}

export default CicloController;