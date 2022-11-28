
const express = require('express');
const router = express.Router();

const User = require("../controllers/user.contoller");

router.post("/forum/cadastrar", User.criarUsuario);
router.get("/forum/listar", User.listarUsuarios);
router.get("/forum/profile", User.perfil);
router.put("/forum/profile", User.atualizarPerfil);

module.exports = router;