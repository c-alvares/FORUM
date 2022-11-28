const novoUsuario = (model) => {
    return `INSERT INTO user VALUES (DEFAULT,'${model.user_name}','${model.nome}','${model.email}','${model.senha}')`;
}

const mostrarUsuarios = () => {
    return `SELECT * FROM user`;
}

const dadosUsuario = (model) => {
    return `SELECT * FROM user WHERE user_name = '${model.user_name}'`;
}

const atualizarCadastro = (model) => {
    return `UPDATE user SET 
                nome = '${model.nome}',
                senha = '${model.senha}'
            WHERE user_name = '${model.user_name}'`;
}

module.exports = {
    novoUsuario,
    mostrarUsuarios,
    dadosUsuario,
    atualizarCadastro,

}