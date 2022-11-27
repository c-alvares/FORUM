const express = require('express');
const router = express.Router();

const r = require('../controllers/Publicacoes.controle')
const r1 = require('../controllers/tema.controle')
const r2 = require('../controllers/favoritos.controle')
const r3 = require('../controllers/respostas.controle')
const r4 = require('../controllers/respostasRes.controle')

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

//Favoritos
router.get('/listarFavoritos', r2.listarFavoritos);
router.post('/criarFavoritos', r2.criarFavoritos);
router.delete('/excluirFavoritos', r2.excluirFavoritos);
router.put('/alterarFavoritos', r2.editarFavoritos);

//Resposta
router.get('/listarResposta', r3.listarRespostas);
router.post('/criarResposta', r3.criarRespostas);
router.delete('/excluirResposta', r3.excluirRespostas);
router.put('/alterarResposta', r3.editarespostas);

//Respostas das Respostas
router.get('/listarRespostaRes', r4.listarRespostasRes);
router.post('/criarRespostaRes', r4.criarRespostasRes);
router.delete('/excluirRespostaRes', r4.excluirRespostasRes);
router.put('/alterarRespostaRes', r4.editarespostasRes);

module.exports = router;

