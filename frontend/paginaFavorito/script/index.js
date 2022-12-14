// var fechar = document.querySelector('#fechar')
var abrirModal = document.querySelector('.abrir')
var publi = document.querySelector('#publi')
var divFavoritos = document.querySelector('.divFavoritos')


function carregar() {
    divFavoritos.classList.remove('model')
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

}





