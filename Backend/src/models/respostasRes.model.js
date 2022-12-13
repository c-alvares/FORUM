const listarRespostas = () => {
    return 'SELECT * FROM Respostas_resp;'
}

const readViewRespR = (modal) => {
    return `SELECT * FROM View_PubliRespResp WHERE id_resposta = ${modal.id_resposta};`
}

const criarRespostas  = (model) => {
    return `INSERT INTO Respostas_resp VALUES (default, ${model.id_resposta}, '${model.resposta_res}');`
}
const excluirRespostas = (model) => {
    return `DELETE FROM Respostas_resp WHERE id_comentario = ${model.id_comentario}`
}

const EditarRespostas = (model) => {
    return `UPDATE Respostas_resp SET id_resposta =${model.id_resposta}, resposta_res =  '${model.resposta_res}' WHERE id_comentario = ${model.id_comentario};`
}

module.exports = {
    listarRespostas,
    criarRespostas,
    excluirRespostas,
    EditarRespostas,
    readViewRespR
}