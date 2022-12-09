const listarTemas = () => {
    return 'SELECT * FROM temas;'
}

const buscarTemas = (model) => {
    return `SELECT * FROM temas WHERE nome LIKE '%${model.nome}%'`;
}

const createTemas  = (model) => {
    return `INSERT INTO temas VALUES (default, '${model.nome}', '${model.foto}');`
}

const deleteTemas = (model) => {
    return `DELETE FROM temas WHERE id = ${model.id}`
}

const editarTemas = (model) => {
    return `UPDATE temas SET nome = '${model.nome}', foto = '${model.foto}' WHERE id = ${model.id};`
}

module.exports = {
    listarTemas,
    buscarTemas,
    createTemas,
    deleteTemas,
    editarTemas
}