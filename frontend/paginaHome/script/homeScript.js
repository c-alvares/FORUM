let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');
let avatar = document.querySelector('#avatar')
let listaCards = document.querySelector('.listaCards');
let barraPesquisa = document.querySelector('#barra');
var caminhoResp = document.querySelector('.caminhoResp')
let barra = document.querySelector('#barra');
let tabelaPesquisa = document.querySelector('.tabelaPesquisa');


// barra.addEventListener('input', () => {
//   let iniciarBusca = {
//     "nome": barra.value
//   }
  const options = {
    method: 'GET'
    // 'headers': {'Content-Type': 'application/json'},
    // 'body': JSON.stringify(iniciarBusca)
  };

  fetch('http://localhost:3000/listarTemas', options)

    .then(response => response.json())
    .then(response => {
      response.forEach(temaPesquisado => {
        let abrirDiv = document.querySelector('.linhaPesquisa').cloneNode(true)
        abrirDiv.classList.remove('modal2')
        abrirDiv.querySelector('#celulaPesquisa').innerHTML = temaPesquisado.nome

        tabelaPesquisa.appendChild(abrirDiv)
      })
    })
    .catch(err => console.error(err));
    
  



  
  function publicarRespResposta(){
  var responderResp = document.querySelector('#inppublicar')
 
  fetch('http://localhost:3000/listarResposta')
    .then(response => response.json())
    .then(respons => {
      respons.forEach(respostas => {

        fetch('http://localhost:3000/listarRespostaRes')
        .then(response => response.json())
        .then(response => {
          response.forEach(respresp => {
          if(respostas.id_resposta == respresp.id_resposta){
            console.log(responderResp.value)
  var responder = {
    "id_resposta": respostas.id_resposta,
    "resposta_res": responderResp.value
  }
  console.log(responder)
          }

  // fetch('http://localhost:3000/criarTemas', {
  //   'method': 'POST',
  //   'headers': {
  //     'Content-Type': 'application/json'
  //   },
  //   'body': JSON.stringify(criarTemas)
  // })

  //   .then(response => response.status)
  //   .then(response => {
  //     if (response == 201) {
  //       alert("Tema cadastrado com sucesso")
  //       window.location.reload()
  //     } else {
  //       alert('Falha ao cadastrar novo tema')
  //     }
  //   })
  //   .catch(err => console.error(err));
})
      })
    })
})
}




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
                              fetch('http://localhost:3000/listarResposta')
                              .then(response => response.json())
                              .then(response => {
                                response.forEach(resp => {
                                  if(rr.id_resposta == resp.id_resposta){
                                    console.log(resp.id_resposta)
                              var RespostasRed = document.querySelector('#respostasRespostass')
                              RespostasRed.cloneNode(true)
                              RespostasRed.classList.remove('modal')

                              RespostasRed.querySelector('#avatarRes').src = '../../../assets/' + us.img
                              RespostasRed.querySelector('#userRes').innerHTML = us.user_name
                              RespostasRed.querySelector('#ResRes').innerHTML = rr.resposta_res

                              document.querySelector('.caminhoResp').appendChild(RespostasRe)
                                  }
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


function fecharResp(){
  let c = document.querySelector('.caminhoResp')
 c.classList.add('modal')
}