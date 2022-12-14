const listarFavoritos = () => {
    return 'SELECT * FROM user_fav;'
}

const criarFavoritos  = (model) => {
    return `INSERT INTO favoritos VALUES (${model.id_user}, ${model.id_publi});`
}
const excluirFavoritos = (model) => {
    return `DELETE FROM favoritos WHERE id_user = ${model.id_user}`
}

const editarFavoritos = (model) => {
    return `UPDATE favoritos SET id_user =${model.id_user}, id_publi =  ${model.id_publi} WHERE id_user = ${model.id_user};`
}

module.exports = {
    listarFavoritos,
    criarFavoritos,
    excluirFavoritos,
    editarFavoritos
}