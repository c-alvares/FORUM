let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');
let avatar = document.querySelector('#avatar')
let listaCards = document.querySelector('.listaCards');
let barraPesquisa = document.querySelector('#barra');
var caminhoResp = document.querySelector('.caminhoResp')
let barra = document.querySelector('#barra');
let tabelaPesquisa = document.querySelector('.tabelaPesquisa');
let abrirDiv = document.querySelector('.linhaPesquisa')
let celulaPesquisa = document.querySelector('#celulaPesquisa')
let modalPesquisa = document.querySelector('.modalPesquisa')
let tela = document.querySelector('.tela');
var id_publi = ''
var id = localStorage.getItem('id_user')
var fecharrespresp = document.querySelector('.fecharRespostas')


function pesquisarTemas() {
  const options = { method: 'GET' };

  let uri = 'http://localhost:3000/pesquisarTemas/' + barra.value;
  console.log(uri)
  fetch(uri, options)
    .then(response => response.json())
    .then(response => {
      response.forEach(temaPesquisado => {
        abrirDiv.cloneNode(true)
        abrirDiv.classList.remove('modal2')
        abrirDiv.querySelector('#celulaPesquisa').innerHTML = temaPesquisado.nome

        tabelaPesquisa.appendChild(abrirDiv)
      })
    })
    .catch(err => console.error(err));

  document.addEventListener('click', event => {
    const isClickInside = celulaPesquisa.contains(event.target)

    if (!isClickInside) {
      abrirDiv.classList.add('modal2')
    }

  })
}




function publicarResposta() { //ok
  var responderRe = document.querySelector('#inppublicar')
  var responder = {
    "id_publi": id_publicacao,
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
        window.location.reload()

      } else {
        alert('Falha ao publicar resposta')
      }
    })
    .catch(err => console.error(err));
}

function publiccarRespResp(e){
  var responderRe = document.querySelector('#inppublicarRespResp')
  var responder = {
    "id_resposta": id_publicacao,
    "resposta_res": responderRe.value
  }


  fetch('http://localhost:3000/criarRespostaRes', {
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
        window.location.reload()

      } else {
        alert('Falha ao publicar resposta')
      }
    })
    .catch(err => console.error(err));
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
  fetch('http://localhost:3000/listarView')
    .then(response => response.json())
    .then(response => {
      response.forEach(lv => {
        let publicacoes = document.querySelector('.publicacoes').cloneNode(true);
        publicacoes.classList.remove('modal');
        publicacoes.querySelector('#publicacao').innerHTML = lv.publicacoes;
        publicacoes.querySelector("#avatarPubli").src = '../../../assets/' + lv.img
        publicacoes.querySelector("#userPubli").innerHTML = lv.user_name
        publicacoes.innerHTML += `<div id="RR" onclick="VisualizarRespostas(${lv.id_publi})">Visualizar Respostas...</div>`
        publicacoes.innerHTML += ` <img src="../../assets/naofavoritado.png" alt="nFavoritado" id="naoFavorito" onclick="Favoritando(${lv.id_publi})">`

        document.querySelector('nav').appendChild(publicacoes)
      })
    })


  fetch('http://localhost:3000/forum/listar')
    .then(response => response.json())
    .then(response => {
      response.forEach(us => {
        if(us.id_user == id){
          avatar.src = '../../../assets/' + us.img
        }
        
      })
    })
}

function VisualizarRespostas(id_publi) {
  fetch(`http://localhost:3000/listarRespostaView/${id_publi}`)
    .then(response => response.json())
    .then(response => {
      if (response[0] == undefined) {
        document.querySelector('#arrumandoQuadrado').innerHTML = `<img onclick='fecharResp()' class="fecharR" src="../../../assets/fechar.png" alt="fechar.png">
        <p id='resPergunta'></p>
       <div class='RespostasRes modal'>
           <div class="quadradro1">
               <div class="usuarioRespode">
                   <img id="avatarPubli" alt="avatar.png">
                   <p id='usuarioPergunta'>Usuario</p>
               </div>
                <p id='resp'></p>
               <p id="visualizarRespostasRespostas" onclick="visualizarRespResp(${id_publi})">Visualizar Respostas...</p>
           </div>

           <div class="respostasRespostass modal" >
               <img onclick='fecharresposta()' class="fecharRespostas" src="../../../assets/fechar.png" alt="fechar.png">
               <div class='alinhando'>
               <img id="avatarRes" alt="avatar res"/>
               <p id="userRes"></p>
           </div> 
               <p id="ResRes"></p>
           </div>
       </div> 
       <div class='publicandorespostas'>
           <input id="inppublicar" type='text' placeholder='Escreva um comentario...'>
           <button id='btnPublicarRepResp' onclick='publicarResposta()'>Publicar</button>
       </div>`
        id_publicacao = id_publi
        var caminhoResp = document.querySelector('.caminhoResp')
          caminhoResp.classList.remove('modal')
          var resposta = document.querySelector('.RespostasRes').cloneNode(true)
          resposta.classList.remove('modal')
      } else {
        document.querySelector('#arrumandoQuadrado').innerHTML = `<img onclick='fecharResp()' class="fecharR" src="../../../assets/fechar.png" alt="fechar.png">
        <p id='resPergunta'></p>
       <div class='RespostasRes modal'>
           <div class="quadradro1">
               <div class="usuarioRespode">
                   <img id="avatarPubli" alt="avatar.png">
                   <p id='usuarioPergunta'>Usuario</p>
               </div>
                <p id='resp'></p>
               <p id="visualizarRespostasRespostas" onclick="visualizarRespResp(${id_publi})">Visualizar Respostas...</p>
           </div>

           <div class="respostasRespostass modal" >
               <img onclick='fecharresposta()' class="fecharRespostas" src="../../../assets/fechar.png" alt="fechar.png">
               <div class='alinhando'>
               <img id="avatarRes" alt="avatar res"/>
               <p id="userRes"></p>
           </div> 
               <p id="ResRes"></p>
           </div>
       </div> 
       <div class='publicandorespostas'>
           <input id="inppublicar" type='text' placeholder='Escreva um comentario...'>
           <button id='btnPublicarRepResp' onclick='publicarResposta()'>Publicar</button>
       </div>`
        id_publicacao = id_publi
        response.forEach(vp => {
          console.log(vp)

          var caminhoResp = document.querySelector('.caminhoResp')
          caminhoResp.classList.remove('modal')
          var resposta = document.querySelector('.RespostasRes').cloneNode(true)
          resposta.classList.remove('modal')
          resposta.querySelector('#avatarPubli').src = '../../../assets/' + vp.img
          resposta.querySelector('#usuarioPergunta').innerHTML = vp.user_name
          resposta.querySelector('#resp').innerHTML = vp.resposta
          // resposta.innerHTML += `<p id="visualizarRespostasRespostas" onclick="visualizarRespResp(${vp.id_publi})">Visualizar Comentarios...</p>`
          document.querySelector('#arrumandoQuadrado').appendChild(resposta)

        })
      }
    })

}
function visualizarRespResp(id_publi) {
  console.log(id_publi)
  fetch(`http://localhost:3000/listarRespostaRes/${id_publi}`)
    .then(response => response.json())
    .then(respons => {
      document.querySelector('#arrumandoQuadrado').innerHTML = `
      <img onclick='fecharRespResp()' src="../../../assets/fechar.png" alt="fechar.png" />
      <div class="respostasRespostass model">
          <div class='alinhando'>
          <img id="avatarRes" alt="avatar res"/>
          <p id="userRes"></p>
      </div> 
          <p id="ResRes"></p>
      </div>
    </div> 
    <div class='publicandorespostas'>
      <input id="inppublicarRespResp" type='text' placeholder='Escreva um comentario...'>
      <button id='btnPublicarRepRespresp' onclick='publiccarRespResp(${id_publi})'>Publicar</button>
    </div>`
    
      console.log(respons)
      respons.forEach(us => {

        var RespostasRed = document.querySelector('.respostasRespostass').cloneNode(true)
        RespostasRed.classList.remove('model')
        RespostasRed.querySelector('#avatarRes').src = '../../../assets/' + us.img
        RespostasRed.querySelector('#userRes').innerHTML = us.user_name
        RespostasRed.querySelector('#ResRes').innerHTML = us.resposta_res

        document.querySelector('.caminhoResp').appendChild(RespostasRed)

        
      })
    })
   
}

function fecharRespResp(){
  let fr = document.querySelector('.respostasRespostass')
          console.log('funcionando eu to')
          fr.classList.add('modal')
}

function modalCriarpublicacao() {
  var abrir = document.querySelector('.criarPubli')
  var fechar = document.querySelector('.fecharModalPu')
  abrir.classList.remove('modal')

  var iTema = document.querySelector('#id_tema')
  var iPubli = document.querySelector('#publi')
  var publicarPubli = document.querySelector('#publicarPubli')

 
  publicarPubli.addEventListener('click', () => {
    var publicar = {
      'id_user': id,
      'id_tema': iTema.value,
      'publicacoes': iPubli.value
    }
     console.log(publicar)
  
    fetch('http://localhost:3000/createPublicacoes', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(publicar)
    })
      .then(response => response.status)
      .then(response => {
        if (response == 201) {
          alert("Publicação cadastrada com sucesso")
          window.location.reload()
        } else {
          alert('Falha ao cadastrar nova publicação')
        }
      })
      .catch(err => console.error(err));

  })


  fechar.addEventListener('click', () => {
    abrir.classList.add('modal')
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
  let r = document.querySelector('.RespostasRes')
  r.innerHTML = ''
  c.classList.add('modal')


}


function Favoritando(id_publi) {
  var imgF = document.querySelector('#naoFavorito')

  var responder = {
    "id_user": id,
    "id_publi": id_publi,
  }
  console.log(responder)

  fetch('http://localhost:3000/criarFavoritos', {
    'method': 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body': JSON.stringify(responder)
  })
    .then(response => response.status)
    .then(response => {
      if (response == 201) {

        imgF.src = "../../../assets/favoritado.png"
        

      } else {
        alert('Falha ao favoritar')
      }
    })
    .catch(err => console.error(err));
}

function fecharresposta() {
  let fr = document.querySelector('.respostasRespostass')
  console.log('funcionando eu to')
  fr.classList.add('model')
  fr.innerHTML = ''
}
