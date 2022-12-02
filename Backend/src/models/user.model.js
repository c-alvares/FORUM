const novoUsuario = (model) => {
    return `INSERT INTO users VALUES (DEFAULT,'${model.user_name}','${model.nome}','${model.email}','${model.senha}',${model.id_role})`;
}

const login = (model) => {
    return `SELECT * FROM users WHERE user_name = '${model.user_name}' AND senha = '${model.senha}'`;
}

const mostrarUsuarios = () => {
    return `SELECT * FROM users`;
}

const dadosUsuario = (model) => {
    return `SELECT * FROM users WHERE user_name = '${model.user_name}'`;
}

const atualizarCadastro = (model) => {
    return `UPDATE users SET 
                nome = '${model.nome}',
                senha = '${model.senha}'
            WHERE user_name = '${model.user_name}'`;
}

module.exports = {
    novoUsuario,
    login,
    mostrarUsuarios,
    dadosUsuario,
    atualizarCadastro,

}