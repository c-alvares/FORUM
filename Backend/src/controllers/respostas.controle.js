const ligacao = require('../models/respostas.model')
const con = require('../DAO/forum.dao')

const listarRespostas = (req, res) => {
    con.query(ligacao.listarRespostas(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const criarRespostas = (req, res) => {
    con.query(ligacao.criarRespostas(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const excluirRespostas = (req, res) =>  {
    con.query(ligacao.excluirRespostas(req.body), (err, result) =>  {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

const editarespostas = (req, res) =>  {
    con.query(ligacao.EditarRespostas(req.body), (err, result) =>  {
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
    listarRespostas,
    criarRespostas,
    excluirRespostas,
    editarespostas 
}