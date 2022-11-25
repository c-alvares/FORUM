const Interligacao = require('../models/Publicacoes.model')
const con = require('../DAO/forum.dao')

const listarPublicacoes = (req, res) => {
    con.query(Interligacao.readPublicacoes(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
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


module.exports = {
    listarPublicacoes,
    excluirPublicacao,
    createPublicacoes
}