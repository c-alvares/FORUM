const readPublicacoes = () => {
    return 'SELECT * FROM Publicacoes;'
}

const createPublicacoes  = (model) => {
    return `INSERT INTO Publicacoes VALUES (default, ${model.id_user}, ${model.id_tema}, '${model.publicacoes}');`
}
const deletePublicacoes = (id) => {
    return `DELETE FROM Publicacoes WHERE id_publi = ${id}`
}

module.exports = {
    readPublicacoes,
    deletePublicacoes,
    createPublicacoes
}