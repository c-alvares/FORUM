const ligacao = require('../models/temas.model')
const con = require('../DAO/forum.dao')

const listarTemas = (req, res) => {
    con.query(ligacao.listarTemas(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const criarTemas = (req, res) => {
    con.query(ligacao.createTemas(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const excluirTemas = (req, res) =>  {
    con.query(ligacao.deleteTemas(req.body), (err, result) =>  {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

const editarTemas = (req, res) =>  {
    con.query(ligacao.editarTemas(req.body), (err, result) =>  {
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
    listarTemas,
    criarTemas,
    excluirTemas,
    editarTemas 
}