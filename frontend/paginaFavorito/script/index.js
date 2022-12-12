// var fechar = document.querySelector('#fechar')
// var img = document.querySelector('#avatar')
// var favoritos = document.querySelector('#favoritos')
var abrirModal = document.querySelector('.abrir')
// var user = document.querySelector('#user')
var publi = document.querySelector('#publi')
var divFavoritos = document.querySelector('.divFavoritos')
// var fecharFav = document.querySelector('#fecharFav')
// var avatar = document.querySelector('#avatarU')
var id = localStorage.getItem('id_user')

function carregar() {
    fetch('http://localhost:3000/forum/listar')
        .then(resp => { return resp.json() })
        .then(data => {
            data.forEach(d => {
                        if (d.id_user == id) {
                            divFavoritos.classList.remove('model')
                            fetch('http://localhost:3000/listarPublicacoes')
                                .then(resp => { return resp.json() })
                                .then(pub => {
                                    pub.forEach(p => {
                                        if (d.id_user == p.id_user) {
                                            fetch('http://localhost:3000/listarFavoritos')
                                                .then(resp => { return resp.json() })
                                                .then(fav => {
                                                    fav.forEach(f => {
                                                        var abrirDiv = document.querySelector('.abrir').cloneNode(true)
                                                        abrirDiv.classList.remove('model')
                                                        if (p.id_publi == f.id_publi) {
                                                            console.log(f)
                                                            abrirDiv.querySelector('#avatarU').src = '../../../../assets/' + d.img
                                                            abrirDiv.querySelector('#user').innerHTML = d.user_name
                                                            abrirDiv.querySelector('#publi').innerHTML = p.publicacoes

                                                            divFavoritos.appendChild(abrirDiv)


                                                        }
                                                    })
                                                })
                                        }

                                    })
                                })
                        }
                    
                
            })
        }); 
}