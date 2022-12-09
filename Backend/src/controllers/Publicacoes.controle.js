const Interligacao = require('../models/publicacoes.model')
const con = require('../DAO/forum.dao')

const listarPublicacoes = (req, res) => {
    con.query(Interligacao.readPublicacoes(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const pesquisarPublicacoes = (req, res) => {
    con.query(Interligacao.buscarPublicacao(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const createPublicacoes = (req, res) => {
    con.query(Interligacao.createPublicacoes(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const excluirPublicacao = (req, res) =>  {
    con.query(Interligacao.deletePublicacoes(req.body), (err, result) =>  {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

const editarPublicacao = (req, res) =>  {
    con.query(Interligacao.editarPublicacoes(req.body), (err, result) =>  {
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
    listarPublicacoes,
    pesquisarPublicacoes,
    excluirPublicacao,
    createPublicacoes,
    editarPublicacao
}