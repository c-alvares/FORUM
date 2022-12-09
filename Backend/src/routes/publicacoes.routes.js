const express = require('express');
const router = express.Router();

const publicacao = require('../controllers/publicacoes.controle')

router.get('/listarPublicacoes', publicacao.listarPublicacoes);
router.get('/pesquisarPublicacoes', publicacao.pesquisarPublicacoes);
router.post('/createPublicacoes', publicacao.createPublicacoes);
router.delete('/excluirPublicacoes', publicacao.excluirPublicacao);
router.put('/editarPublicacoes', publicacao.editarPublicacao);

module.exports = router;