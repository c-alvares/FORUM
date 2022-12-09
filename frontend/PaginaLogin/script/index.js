var InputEmail = document.querySelector('#email')
var InputSenha = document.querySelector('#senha')
var nav = document.querySelector('nav')
var btnLogar = document.querySelector('#logar')
var InputsVazioEmail = document.querySelector('#vazioEmail')
var InputsVaziosSenha = document.querySelector('#vazioSenha')
var loginErrado = document.querySelector('#userErrado')
var abrirModal = document.querySelector('.abrir')
var fecharModal = document.querySelector('#fechar')

var certo = false;

fetch('http://localhost:3000/forum/listar')
    .then(res => { return res.json() })
    .then(re => {
        re.forEach(login => {
            btnLogar.addEventListener('click', () => {
                if (InputEmail.value.lenght < 0) {
                    InputsVazioEmail.innerHTML = "Por favor, preencha o campo acima!"
                    nav.classList.add('a-jump-bounce')
                }
                else if (InputSenha.value.lenght < 0) {
                    InputsVaziosSenha.innerHTML = "Por favor, preencha o campo acima!"
                    nav.classList.add('a-jump-bounce')
                } else {
                    if (InputEmail.value == login.user_name || InputEmail.value == login.email && InputSenha.value == login.senha) {
                        certo = true;
                        localStorage.setItem('username', login.user_name)
                        window.location.href = "../paginaHome/home.html"
                        window.localStorage.setItem('id_user', login.id_user)

                    } else {
                        certo = false
                        nav.classList.add('a-jump-bounce')
                        loginErrado.innerHTML = 'Login ou senha incorretos!'
                    }
                }

            })
        })
    })

function AbrirModalRedefinirSenha() {
    abrirModal.classList.remove('modal')
    logar.style = 'display: none; visibility: hidden'
    var ConfirmarSenha = document.querySelector('#senhaCon')
    var username = document.querySelector('#username')
    var name = document.querySelector('#nome')
    var senha = document.querySelector('#senhaR')
    var atualizar = document.querySelector('#atualizar')

    atualizar.addEventListener('click', () => {
        if (username.value == '' && name.value == '' && senha.value  == '' && ConfirmarSenha.value == '') {
            alert('preencha os campos acima!')
        } else {
            if (senha.value == ConfirmarSenha.value) {
                let alterar = {
                    'user_name': username.value,
                    'nome': name.value,
                    "senha": senha.value
                }
                fetch('http://localhost:3000/forum/profile', {
                    "method": 'PUT',
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(alterar)
                })
                    .then(response => { return response.status })
                    .then(res => {
                        if (res == 200) {
                            alert('Usuario alterado com sucesso!')
                            window.location.reload()

                        } else {
                            alert('Falha ao alterar usuario!')
                        }
                    })
                    .catch(err => console.error(err));
            }
        }

    })


}

fecharModal.addEventListener('click', () => {
    abrirModal.classList.add('modal')
    logar.style = ''
})



