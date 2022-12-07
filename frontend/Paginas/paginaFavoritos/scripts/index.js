var fechar = document.querySelector('#fechar')
var img = document.querySelector('#avatar')
var username = document.querySelector('#username')
var nome = document.querySelector('#nome')
var email = document.querySelector('#email')
var password = document.querySelector('#senha')
var favoritos = document.querySelector('#favoritos')
var editar = document.querySelector('#editar')
var abrirModal = document.querySelector('.abrirE')
var user = document.querySelector('#user')
var publi = document.querySelector('#publi')
var divFavoritos = document.querySelector('.divFavoritos')
var fecharFav = document.querySelector('#fecharFav')
var abrirDiv = document.querySelector('.abrir')
var avatar = document.querySelector('#avatarU')

function carregar() {
    fetch('http://localhost:3000/forum/listar')
        .then(resp => { return resp.json() })
        .then(data => {
            data.forEach(d => {
                img.src = '../../../../assets/' + d.imagem
                username.value = d.user_name
                nome.value = d.nome
                email.value = d.email
                password.value = d.password

                favoritos.addEventListener('click', () => {
                    divFavoritos.classList.remove('model')
                    abrirDiv.classList.remove('model')
                    fetch('http://localhost:3000/listarPublicacoes')
                        .then(resp => { return resp.json() })
                        .then(pub => {
                            pub.forEach(p => {
                                if (d.id_user == p.id_user) {
                                    fetch('http://localhost:3000/listarFavoritos')
                                        .then(resp => { return resp.json() })
                                        .then(fav => {
                                            fav.forEach(f => {
                                                if(p.id_publi == f.id_publi){
                                                    avatar.src = '../../../../assets/' + d.imagem
                                                   user.innerHTML = d.user_name
                                                   publi.innerHTML = p.publicacoes
                                                }
                                            })
                                        })
                                    }

                            })
                                })
                        })

                })
            });

            editar.addEventListener('click', () => {
                abrirModal.classList.remove('model')
                var ConfirmarSenha = document.querySelector('#senhaCon')
                var username = document.querySelector('#InputUsername')
                var name = document.querySelector('#Inputnome')
                var senha = document.querySelector('#senhaR')
                var atualizar = document.querySelector('#atualizar')

                atualizar.addEventListener('click', () => {
                    if (username.value == '' && name.value == '' && senha.value == '' && ConfirmarSenha.value == '') {
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
            })


        }

fechar.addEventListener('click', () => {
            abrirModal.classList.add('model')
          
        })

        fecharFav.addEventListener('click', () => {
            divFavoritos.classList.add('model')
            abrirDiv.classList.add('model')
        })