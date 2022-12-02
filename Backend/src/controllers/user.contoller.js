const user = require('../models/user.model');
const con = require('../DAO/forum.dao')

const criarUsuario = (req, res) => {
    con.query(user.novoUsuario(req.body), (err, result) => {
        if (err == null)
            res.json('Cadastrado com Sucesso').status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}


const login = (req, res) => {
    const user = req.body;

    jwt.sign(user, process.env.KEY, { expiresIn: '1m' },function(err, token) {
        if(err == null) {
            user["token"] = token;
            res.status(200).json(user).end();
        }else {
            res.status(404).json(err).end();
        }
    });
}


const listarUsuarios = (req, res) => {
    con.query(user.mostrarUsuarios(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end()
    });
}

const perfil = (req, res) => {
    con.query(user.dadosUsuario(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end()
        else
            res.status(500).end()
    });
}

const atualizarPerfil = (req, res) => {
    con.query(user.atualizarCadastro(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json("Perfil Alterado").status(200).end();
            else
                res.json('Não encontrado').status(404).end();
        else
            res.status(500).end();
    });
}


module.exports = {
    criarUsuario,
    login,
    listarUsuarios,
    perfil,
    atualizarPerfil
}