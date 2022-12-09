let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');
let avatar = document.querySelector('#avatar')
let listaCards = document.querySelector('.listaCards');
let barraPesquisa = document.querySelector('#barra');
var perguntasR = document.querySelector('#respostaRespo')
var caminhoResp = document.querySelector('.caminhoResp')


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

    fetch('http://localhost:3000/listarPublicacoes')
    .then(response => response.json())
    .then(response => {
      response.forEach(p => {
        let publicacoes = document.querySelector('.publicacoes').cloneNode(true);
        publicacoes.classList.remove('modal');

        publicacoes.querySelector('#publicacao').innerHTML = p.publicacoes;
        publicacoes.querySelector("#avatarPubli").src =  '../../../assets/' +  usuario.img
        publicacoes.querySelector("#userPubli").innerHTML = usuario.user_name

        document.querySelector('nav').appendChild(publicacoes)

        perguntasR.addEventListener('click', () => {
          caminhoResp.classList.remove('modal')
          fetch('http://localhost:3000/listarResposta')
          .then(response => response.json())
          .then(response => {
            response.forEach(r => {
              var Vrespostas = document.querySelector('.RespostasRes').cloneNode(true)
              Vrespostas.classList.remove('modal')
              Vrespostas.querySelector('#avatarPubli').innerHTML = usuario.img
              Vrespostas.querySelector('#usuarioPergunta').innerHTML = usuario.publicacoes
              Vrespostas.querySelector('#resp').innerHTML = r.resposta

              document.querySelector('main').appendChild(Vrespostas)


            })
          })
        })
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