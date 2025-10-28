import ciclo from "../models/Ciclo.js";

class CicloController {
    static async cadastrar(req, res){
        try {
            const novoCiclo = await ciclo.create(req.body);
            res.status(201).json("ciclo cadastrado com sucesso: ", novoCiclo);
        } catch (error){
            res.status(500).json({ message: "Erro ao cadastrar ciclo"});
        }
    }
    static async busca(req, res){
        try {
            const ciclos = await ciclo.find({});
            res.json(ciclos);
        } catch (error){
            res.status(500).json({ message: "Erro ao buscar dados"});
        }
    }
    static async exclui (req, res) {
    try {
      const id = req.params.id;
      await ciclo.findByIdAndDelete(id);
      res.status(200).json({ message: "ciclo excluido" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
}

export default CicloController;