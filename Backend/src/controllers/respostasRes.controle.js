const ligacao = require('../models/respostasRes.model')
const con = require('../DAO/forum.dao')

const listarRespostasRes = (req, res) => {
    con.query(ligacao.listarRespostas(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const criarRespostasRes = (req, res) => {
    con.query(ligacao.criarRespostas(req.body), (err, result) => {
        if(err == null) {
            res.status(201).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

const excluirRespostasRes = (req, res) =>  {
    con.query(ligacao.excluirRespostas(req.body), (err, result) =>  {
        if(err == null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
};

const editarespostasRes = (req, res) =>  {
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
    listarRespostasRes,
    criarRespostasRes,
    excluirRespostasRes,
    editarespostasRes 
}