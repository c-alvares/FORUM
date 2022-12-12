let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');
let avatar = document.querySelector('#avatar')
let listaCards = document.querySelector('.listaCards');
let barraPesquisa = document.querySelector('#barra');
var caminhoResp = document.querySelector('.caminhoResp')
let barra = document.querySelector('#barra');
let tabelaPesquisa = document.querySelector('.tabelaPesquisa');

barra.addEventListener('submit', () => {

  const options = {method: 'GET'};

  let uri = 'http://localhost:3000/pesquisarTemas/' + barra.value;
  console.log(uri)
  fetch(uri, options)
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
})


// how to create search bar?
// <script>
// var a = document.getElementById('tfnewsearch');
// a.addEventListener('submit',function(e) {
// e.preventDefault();
// var b = document.getElementById('tftextinput').value;
// window.location.href = 'http://mywebsite.com/'+b;

// });

// </script>


// <input type="text" class="tftextinput" id="tftextinput" name="q" size="21" maxlength="120">


// <div id="tfheader">
//     <form id="tfnewsearch" method="get" action="http://www.mywebsite.com">
//         <input type="text" class="tftextinput" id="tftextinput" name="q" size="21" maxlength="120"><input type="submit" value="search" class="tfbutton">
//     </form>
// <div class="tfclear"></div>
// </div>

// <script>
//     var a = document.getElementById('tfnewsearch');
//     a.addEventListener('submit',function(e) {
//         e.preventDefault();
//         var b = document.getElementById('tftextinput').value;
//         window.location.href = 'http://mywebsite.com/'+b;

//     });

// </script>



function publicarResposta() {
  fetch('http://localhost:3000/listarResposta')
    .then(response => response.json())
    .then(respons => {
      respons.forEach(respostas => {
                var responderRe = document.querySelector('#inppublicar')

                 var responder = {
                  "id_publi": respostas.id_publi,
                  "resposta": responderRe.value
                 }
                 

                 fetch('http://localhost:3000/criarResposta', {
                'method': 'POST',
                'headers': {
                  'Content-Type': 'application/json'
                },
                'body': JSON.stringify(responder)
              })

                .then(response => response.status)
                .then(response => {
                  if (response == 201) {
                    alert("Resposta publicada com sucesso")
      
                  } else {
                    alert('Falha ao publicar resposta')
                  }
                })
                .catch(err => console.error(err));
               
          
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
            fetch('http://localhost:3000/forum/listar')
              .then(response => response.json())
              .then(response => {
                response.forEach(user => {
                  if (p.id_user == user.id_user) {
                    let publicacoes = document.querySelector('.publicacoes').cloneNode(true);
                    publicacoes.classList.remove('modal');
                    publicacoes.querySelector('#publicacao').innerHTML = p.publicacoes;
                    publicacoes.querySelector("#avatarPubli").src = '../../../assets/' + user.img
                    console.log()
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
  fetch('http://localhost:3000/listarPublicacoes')
    .then(response => response.json())
    .then(response => {
      response.forEach(p => {
         var per = document.querySelector('#resPergunta')
              per.innerHTML = p.publicacoes
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

                      document.querySelector('#arrumandoQuadrado').appendChild(resposta)
                    }
                  })
                })
            })
          })
      })
    })
}

function visualizarRespResp() {
  var RespostasRed = document.querySelector('.respostasRespostass').cloneNode(true)
  RespostasRed.classList.remove('modal')

  fetch('http://localhost:3000/forum/listar')
    .then(response => response.json())
    .then(respons => {
      respons.forEach(us => {
        fetch('http://localhost:3000/listarPublicacoes')
          .then(response => response.json())
          .then(response => {
            response.forEach(p => {
              if(us.id_user == p.id_user){
                console.log(us)
              
              fetch('http://localhost:3000/listarRespostaRes')
                .then(response => response.json())
                .then(respon => {
                  respon.forEach(rr => {
                    console.log(rr)
                    fetch('http://localhost:3000/listarResposta')
                      .then(response => response.json())
                      .then(response => {
                        response.forEach(resp => {
                          console.log(rr)
                          if (rr.id_resposta == resp.id_resposta) {
                            
                            RespostasRed.querySelector('#avatarRes').src = '../../../assets/' + us.img
                            RespostasRed.querySelector('#userRes').innerHTML = us.user_name
                            RespostasRed.querySelector('#ResRes').innerHTML = rr.resposta_res

                            document.querySelector('.caminhoResp').appendChild(RespostasRed)
                          } 
                        })
                      })
                  })
                })
              }
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


function fecharResp() {
  let c = document.querySelector('.caminhoResp')
  c.classList.add('modal')
}

function fecharresposta(){
  let fr= document.querySelector('.respostasRespostass')
  fr.classList.add('modal')
}