const ligacao = require('../models/favoritos.model')
const con = require('../DAO/forum.dao')

const listarFavoritos = (req, res) => {
    con.query(ligacao.listarFavoritos(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const criarFavoritos = (req, res) => {
    con.query(ligacao.criarFavoritos(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const excluirFavoritos = (req, res) =>  {
    con.query(ligacao.excluirFavoritos(req.body), (err, result) =>  {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

const editarFavoritos = (req, res) =>  {
    con.query(ligacao.editarFavoritos(req.body), (err, result) =>  {
        if(err == null) {
            if(result.affectedRows > 0)
            res.status(200).json(req.body).end();
            else
            res.status(404).json(err).end();
        }else {
            res.status(500).json(err).end();
        }
    });
};



module.exports = {
    listarFavoritos,
    criarFavoritos,
    excluirFavoritos,
    editarFavoritos 
}