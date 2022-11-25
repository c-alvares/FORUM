const express = require('express');
const router = express.Router();

const r = require('../controllers/Publicacoes.controle')

router.get('/listarPublicacoes', r.listarPublicacoes);
router.post('/createPublicacoes', r.criarPublicacoes);

module.exports = router;

