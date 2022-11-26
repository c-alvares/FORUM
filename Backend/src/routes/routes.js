const express = require('express');
const router = express.Router();

const r = require('../controllers/Publicacoes.controle')
const r1 = require('../controllers/tema.controle')

//Publicacoes
router.get('/listarPublicacoes', r.listarPublicacoes);
router.post('/createPublicacoes', r.createPublicacoes);
router.delete('/excluirPublicacoes', r.excluirPublicacao);
router.put('/editarPublicacoes', r.editarPublicacao);


//Temas
router.get('/listarTemas', r1.listarTemas);
router.post('/criarTemas', r1.criarTemas);
router.delete('/excluirTemas', r1.excluirTemas);
router.put('/alterar', r1.editarTemas);

module.exports = router;

