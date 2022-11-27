const express = require('express');
const router = express.Router();

const favorito = require('../controllers/favoritos.controle')

router.get('/listarFavoritos', favorito.listarFavoritos);
router.post('/criarFavoritos', favorito.criarFavoritos);
router.delete('/excluirFavoritos', favorito.excluirFavoritos);
router.put('/alterarFavoritos', favorito.editarFavoritos);

module.exports = router;