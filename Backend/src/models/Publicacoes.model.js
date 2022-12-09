const readPublicacoes = () => {
    return 'SELECT * FROM Publicacoes;'
}

const buscarPublicacao = (model) => {
    return `SELECT * FROM Publicacoes WHERE publicacoes LIKE '%${model.publicacoes}%'`;
}

const createPublicacoes  = (model) => {
    return `INSERT INTO Publicacoes VALUES (default, ${model.id_user}, ${model.id_tema}, '${model.publicacoes}');`
}
const deletePublicacoes = (model) => {
    return `DELETE FROM Publicacoes WHERE id_publi = ${model.id_publi}`
}

const editarPublicacoes = (model) => {
    return `UPDATE publicacoes SET id_user = ${model.id_user}, id_tema = ${model.id_tema}, publicacoes = '${model.publicacoes}' WHERE id_publi = ${model.id_publi};`
}

module.exports = {
    readPublicacoes,
    buscarPublicacao,
    deletePublicacoes,
    createPublicacoes,
    editarPublicacoes
}