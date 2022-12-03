var InputEmail = document.querySelector('#email')
var InputSenha = document.querySelector('#senha')
var nav = document.querySelector('nav')
var btnLogar = document.querySelector('#logar')
var InputsVazioEmail = document.querySelector('#vazioEmail')
var InputsVaziosSenha = document.querySelector('#vazioSenha')
var loginErrado = document.querySelector('#userErrado')


var teste = {
    email: "Roberto@gmail.com",
    username: 'Robert12',
    senha: '1234teste'
}

btnLogar.addEventListener('click', () => {
    if (InputEmail.value.lenght < 0) {
        InputsVazioEmail.innerHTML = "Por favor, preencha o campo acima!"
    }
    else if (InputSenha.value.lenght < 0) {
        InputsVaziosSenha.innerHTML = "Por favor, preencha o campo acima!"
    } else {
        if (InputEmail.value == teste.email && InputSenha.value == teste.senha) {
            localStorage.setItem('username', teste.username)
            window.location.href = '../../PaginaHome/index.html'
        } else {
            nav.classList.add('a-jump-bounce')
            loginErrado.innerHTML = 'Login ou senha incorretos!'
        }
    }

})

