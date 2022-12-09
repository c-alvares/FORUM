const express = require('express');
const router = express.Router();

const tema = require('../controllers/tema.controle')

router.get('/listarTemas', tema.listarTemas);
router.post('/criarTemas', tema.criarTemas);
router.delete('/excluirTemas', tema.excluirTemas);
router.put('/alterar', tema.editarTemas);

module.exports = router;