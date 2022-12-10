let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');
let avatar = document.querySelector('#avatar')
let listaCards = document.querySelector('.listaCards');
let barraPesquisa = document.querySelector('#barra');
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
      })
      fetch('http://localhost:3000/listarPublicacoes')
        .then(response => response.json())
        .then(response => {
          response.forEach(p => {
            let publicacoes = document.querySelector('.publicacoes').cloneNode(true);
            publicacoes.classList.remove('modal');
            fetch('http://localhost:3000/forum/listar')
              .then(response => response.json())
              .then(response => {
                response.forEach(user => {
                  if (p.id_user == user.id_user) {
                    publicacoes.querySelector('#publicacao').innerHTML = p.publicacoes;
                    publicacoes.querySelector("#avatarPubli").src = '../../../assets/' + user.img
                    publicacoes.querySelector("#userPubli").innerHTML = user.user_name

                    document.querySelector('nav').appendChild(publicacoes)
                  }
                })
              })
          })
        })
    })
}

function VisualizarRespostas() {
  var RewsRespos = document.querySelector('#visualizarRespostasRespostas')
  
  fetch('http://localhost:3000/listarPublicacoes')
    .then(response => response.json())
    .then(response => {
      response.forEach(p => {
        fetch('http://localhost:3000/listarResposta')
          .then(response => response.json())
          .then(response => {
            response.forEach(resp => {
              fetch('http://localhost:3000/forum/listar')
                .then(response => response.json())
                .then(response => {
                  response.forEach(us => {
                    if (p.id_publi == resp.id_publi && p.id_user == us.id_user) {
                      var caminhoResp = document.querySelector('.caminhoResp')
                      caminhoResp.classList.remove('modal')
                      var resposta = document.querySelector('.RespostasRes').cloneNode(true)
                      resposta.classList.remove('modal')

                      resposta.querySelector('#avatarPubli').src = '../../../assets/' + us.img
                      resposta.querySelector('#usuarioPergunta').innerHTML = us.user_name
                      resposta.querySelector('#resp').innerHTML = resp.resposta
                      resposta.querySelector('#resPergunta').innerHTML = p.publicacoes

                      document.querySelector('.caminhoResp').appendChild(resposta)
                      }
                  })
                })
            })
          })
      })
    })
}

function visualizarRespResp(){
  fetch('http://localhost:3000/forum/listar')
                .then(response => response.json())
                .then(response => {
                  response.forEach(us => {
                    fetch('http://localhost:3000/listarRespostaRes')
                          .then(response => response.json())
                          .then(response => {
                            response.forEach(rr => {
                              var RespostasRe = document.querySelector('#respostasRespostass').cloneNode(true)
                              RespostasRe.classList.remove('modal')

                              RespostasRe.querySelector('#avatarRes').src = '../../../assets/' + us.img
                              RespostasRe.querySelector('#userRes').innerHTML = us.user_name
                              RespostasRe.querySelector('#ResRes').innerHTML = rr.resposta_res

                              document.querySelector('.caminhoResp').appendChild(RespostasRe)
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