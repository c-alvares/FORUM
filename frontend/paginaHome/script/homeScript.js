let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');
let avatar = document.querySelector('#avatar')
let listaCards = document.querySelector('.listaCards');
let barraPesquisa = document.querySelector('#barra');

btCriarTema.addEventListener('click', () => {
  let criarTemas = {
    "nome": inputTema.value,
    "foto": inputImg.value
  }

  fetch('http://localhost:3000/criarTemas', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(criarTemas)
  })

    .then(response => response.status)
    .then(response => {
      if (response == 201) {
        alert("Tema cadastrado com sucesso")
        window.location.reload()
      } else {
        alert('Falha ao cadastrar novo tema')
      }
    })
    .catch(err => console.error(err));
})



function carregarCards() {
  const options = { method: 'GET' };

  fetch('http://localhost:3000/listarTemas', options)
    .then(response => response.json())
    .then(response => {
      response.forEach(tema => {
        let abrirDiv = document.querySelector('.card1').cloneNode(true)
        abrirDiv.classList.remove('clone1')
        abrirDiv.querySelector('#pic1').src = '../../../assets/' + tema.foto
        abrirDiv.querySelector('#tema').innerHTML = tema.nome

        listaCards.appendChild(abrirDiv)
      })
    })
    .catch(err => console.error(err));

  fetch('http://localhost:3000/forum/listar')
    .then(response => response.json())
    .then(response => {
      response.forEach(usuario => {
        avatar.src = '../../../assets/' + usuario.img

<<<<<<< HEAD
    fetch('http://localhost:3000/listarPublicacoes')
    .then(response => response.json())
    .then(response => {
      response.forEach(p => {
        let publicacoes = document.querySelector('.publicacoes').cloneNode(true);
        publicacoes.classList.remove('modal');
        publicacoes.querySelector('#publicacao').innerHTML = p.publicacoes;
=======
        fetch('http://localhost:3000/listarPublicacoes')
          .then(response => response.json())
          .then(response => {
            response.forEach(p => {
              var publicacoes = document.querySelector('.publicacoes').cloneNode(true);
              publicacoes.classList.remove('modal');
              publicacoes.querySelector('#publicacao').innerHTML = p.publicacoes;
              if (usuario.id_user == p.id_user) {
                publicacoes.querySelector('#avatarPubli').src = '../../../assets/' + usuario.img;
                publicacoes.querySelector('#userPubli').innerHTML = usuario.user_name;
                document.querySelector('nav').appendChild(publicacoes)
              }
>>>>>>> d1afb1e31bd0c85b74710287fd3e2b771beb092a


            })
          })
      })
    })
}

const modalCriarTema = () => {
  let modal = document.querySelector('.modalTema');
  modal.classList.remove('modal1');
}

const fecharModalTema = () => {
  let modal = document.querySelector('.modalTema');
  modal.classList.add('modal1');
}