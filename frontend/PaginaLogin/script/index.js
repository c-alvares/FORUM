let InputEmail = document.querySelector('#email');
let InputSenha = document.querySelector('#senha');
let nav = document.querySelector('nav');
let btnLogar = document.querySelector('#logar');
let InputsVazioEmail = document.querySelector('#vazioEmail');
let InputsVaziosSenha = document.querySelector('#vazioSenha');
let loginErrado = document.querySelector('#userErrado');
let abrirModal = document.querySelector('.abrir');
let fecharModal = document.querySelector('#fechar');
let fecharModalC = document.querySelector('#fecharC');
let modalCadastro = document.querySelector('.modalCadastro');

let certo = false;

fetch('http://localhost:3000/forum/listar')
    .then(res => { return res.json() })
    .then(re => {
        console.log(re)
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
    let ConfirmarSenha = document.querySelector('#senhaCon')
    let username = document.querySelector('#username')
    let name = document.querySelector('#nome')
    let senha = document.querySelector('#senhaR')
    let atualizar = document.querySelector('#atualizar')

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

function AbrirModalCadastro() {
    modalCadastro.classList.remove('modalC')
    logar.style = 'display: none; visibility: hidden'
    let usernameC = document.querySelector('#usernameC')
    let nameC = document.querySelector('#nomeC')
    let emailC = document.querySelector('#emailC')
    let senhaC = document.querySelector('#senhaC1')
    let cadastrar = document.querySelector('#cadastrar')

    cadastrar.addEventListener('click', () => {
        if (usernameC.value == '' && nameC.value == '' && emailC.value == '' && senhaC.value  == '') {
            alert('preencha os campos acima!')
        } else {
            let cadastrarUser = {
                'user_name': usernameC.value,
                'nome': nameC.value,
                'email': emailC.value,
                'senha': senhaC.value
            }
                fetch('http://localhost:3000/forum/cadastrar', {
                    "method": 'POST',
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(cadastrarUser)
                })
                    .then(response => { return response.status })
                    .then(res => {
                        if (res == 200) {
                            alert('Usuario cadastrado com sucesso!')
                            window.location.reload()

                        } else {
                            alert('Falha ao cadastrar usuario!')
                        }
                    })
                    .catch(err => console.error(err));
            
        }

    })
}

fecharModalC.addEventListener('click', () => {
    modalCadastro.classList.add('modalC')
    logar.style = ''
})