const listarRespostas = () => {
    return 'SELECT * FROM Respostas;'
}

const readViewResp = (modal) => {
    return `SELECT * FROM View_PubliRespostas WHERE id_publi = ${modal.id_publi};`
}

const listarRespostasId = (model) => {
    return `SELECT * FROM Respostas where id_publi = ${model.id_publi};`
}

const criarRespostas  = (model) => {
    return `INSERT INTO Respostas VALUES (default, '${model.id_publi}', '${model.resposta}');`
}
const excluirRespostas = (model) => {
    return `DELETE FROM Respostas WHERE id_resposta = ${model.id_resposta}`
}

const EditarRespostas = (model) => {
    return `UPDATE Respostas SET id_publi =${model.id_publi}, resposta =  '${model.resposta}' WHERE id_resposta = ${model.id_resposta};`
}

module.exports = {
    listarRespostas,
    criarRespostas,
    excluirRespostas,
    EditarRespostas,
    listarRespostasId,
    readViewResp
}