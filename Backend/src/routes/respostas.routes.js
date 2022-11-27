const express = require('express');
const router = express.Router();

const resposta = require('../controllers/respostas.controle')

router.get('/listarResposta', resposta.listarRespostas);
router.post('/criarResposta', resposta.criarRespostas);
router.delete('/excluirResposta', resposta.excluirRespostas);
router.put('/alterarResposta', resposta.editarespostas);

module.exports = router;