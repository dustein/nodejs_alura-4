import database from '../models';

//vamos criar um metodo para pegar o que consta no banco de dados (select * from Pessoas) e retornar pra gente em json
class PessoaController {
    //"static" para que o m'etodo possa ser chamado sem ter que criar uma nova instancia
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }
};

export default PessoaController;
