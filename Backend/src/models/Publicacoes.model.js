const readPublicacoes = () => {
    return 'SELECT * FROM Publicacoes;'
}

const deletePublicacoes = (id) => {
    return `DELETE FROM Publicacoes WHERE id_publi = ${id}`
}
module.exports = {
    readPublicacoes,
    deletePublicacoes
}