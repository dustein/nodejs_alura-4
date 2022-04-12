import database from '../models';

//vamos criar um metodo para pegar o que consta no banco de dados (select * from Pessoas) e retornar pra gente em json
class PessoaController {
    //"static" para que o metodo possa ser chamado sem ter que criar uma nova instancia
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;
        try {
            const umaPessoa = await database.finOne(
                { where: { id: Number(id)} }
            );
            return status(200).json(umaPessoa);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

export default PessoaController;
