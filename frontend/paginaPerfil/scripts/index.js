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
var avatar = document.querySelector('#avatarU')
var id = localStorage.getItem('id_user')

function carregar() {
    fetch('http://localhost:3000/forum/listar')
        .then(resp => { return resp.json() })
        .then(data => {
            data.forEach(d => {
                    img.src = '../../../../assets/' + d.img
                    username.value = d.user_name
                    nome.value = d.nome
                    email.value = d.email
                    password.value = d.password

                    favoritos.addEventListener('click', () => {
                        if (d.id_user == id) {
                            divFavoritos.classList.remove('model')
                            favoritos.addEventListener('click', () => {
                                    divFavoritos.classList.remove('model')
                                    fetch('http://localhost:3000/listarFavoritos')
                                        .then(resp => { return resp.json() })
                                        .then(fav => {
                                            fav.forEach(f => {
                                                var abrirDiv = document.querySelector('.abrir').cloneNode(true)
                                                abrirDiv.classList.remove('model')

                                                console.log(f)
                                                abrirDiv.querySelector('#avatarU').src = '../../../../assets/' + f.img
                                                abrirDiv.querySelector('#user').innerHTML = f.user_name
                                                abrirDiv.querySelector('#publi').innerHTML = f.publicacoes

                                                divFavoritos.appendChild(abrirDiv)


                                            })
                                        })
                                    
                                    })
                                }
                })
            })
        })


            editar.addEventListener('click', () => {
                abrirModal.classList.remove('model')
                var ConfirmarSenha = document.querySelector('#senhaCon')
                var username1 = document.querySelector('#InputUsername')
                var name1 = document.querySelector('#Inputnome')
                var senha1 = document.querySelector('#senhaR')
                var img1 = document.querySelector('#img')
                var atualizar = document.querySelector('#atualizar')

                fetch('http://localhost:3000/forum/listar')
                    .then(resp => { return resp.json() })
                    .then(data => {
                        data.forEach(d => {
                            username1.value = d.user_name
                            name1.value = d.nome
                            senha1.value = d.senha
                            ConfirmarSenha.value = d.senha
                            img1.value = d.img
                        })
                    })



                atualizar.addEventListener('click', () => {
                    if (senha1.value == ConfirmarSenha.value) {
                        let alterar = {
                            'user_name': username1.value,
                            'nome': name1.value,
                            "senha": senha1.value,
                            "img": img1.value
                        }
                        console.log(alterar)
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
                })
            })
        }

fechar.addEventListener('click', () => {
            abrirModal.classList.add('model')

        })

fecharFav.addEventListener('click', () => {
            divFavoritos.classList.add('model')
            var abrirDiv = document.querySelector('.abrir')
            abrirDiv.classList.add('model')
        })