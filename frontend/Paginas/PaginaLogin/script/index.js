var InputEmail = document.querySelector('#email')
var InputSenha = document.querySelector('#senha')
var nav = document.querySelector('nav')
var btnLogar = document.querySelector('#logar')
var InputsVazioEmail = document.querySelector('#vazioEmail')
var InputsVaziosSenha = document.querySelector('#vazioSenha')
var loginErrado = document.querySelector('#userErrado')
var abrirModal = document.querySelector('.abrir')
var certo = false;

fetch('http://localhost:3000/forum/listar')
.then(res => {return res.json()})
.then(re => {
    re.forEach( login => {
        btnLogar.addEventListener('click', () => {
            if (InputEmail.value.lenght < 0) {
                InputsVazioEmail.innerHTML = "Por favor, preencha o campo acima!"
            }
            else if (InputSenha.value.lenght < 0) {
                InputsVaziosSenha.innerHTML = "Por favor, preencha o campo acima!"
            } else {
                if (InputEmail.value == login.user_name || InputEmail.value == login.email && InputSenha.value == login.senha) {
                    certo = true;
                    localStorage.setItem('username', login.user_name)
                    window.location.href = "../paginaHome/home.html"
                   
                } else {
                    certo = false
                    nav.classList.add('a-jump-bounce')
                    loginErrado.innerHTML = 'Login ou senha incorretos!'
                }
            }
        
        })
    })
})

function AbrirModalRedefinirSenha(){
     abrirModal.classList.remove('modal')
     logar.style =  ''
}



