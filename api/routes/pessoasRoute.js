import { Router } from "express";
import PessoaController from "../controllers/PessoaController";

const router = Router();


router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);

export default router;