const express = require('express');
const router = express.Router();

const respostaRes = require('../controllers/respostasRes.controle')

router.get('/listarRespostaRes', respostaRes.listarRespostasRes);
router.post('/criarRespostaRes', respostaRes.criarRespostasRes);
router.delete('/excluirRespostaRes', respostaRes.excluirRespostasRes);
router.put('/alterarRespostaRes', respostaRes.editarespostasRes);

module.exports = router;