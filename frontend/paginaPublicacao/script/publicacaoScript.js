let inputPubli = document.querySelector('#inputPubli');
let inputImg = document.querySelector('#inputImg');
let btCriarPubli = document.querySelector('#criar');

let listaCards = document.querySelector('.listaCards');

btCriarPubli.addEventListener('click', () => {
      let criarPublis = {
        "publicacoes": inputPubli.value,
        "foto": inputImg.value
    }
      
      fetch('http://localhost:3000/createPublicacoes', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(criarPublis)
      })
      
        .then(response => response.status)
        .then(response => {
            if( response == 201 ) {
                alert("Publicação postada")
                window.location.reload()
            }else {
                alert('Falha ao postar nova publicação')
            }
        })
        .catch(err => console.error(err));
})
  

function carregarPubli() {
    const options = {method: 'GET'};

    fetch('http://localhost:3000/listarPublicacoes', options)
      .then(response => response.json())
      .then(response => {
        response.forEach(publi => {
            var abrirDiv = document.querySelector('.card1').cloneNode(true)
            abrirDiv.classList.remove('clone1')
            // abrirDiv.querySelector('#pic1').src = publi.foto
            abrirDiv.querySelector('#publi').innerHTML = publi.publicacoes

            listaCards.appendChild(abrirDiv)
        })
      })
      .catch(err => console.error(err));
}

const modalCriarPubli = () => {
    let modal = document.querySelector('.modalPubli');
    modal.classList.remove('modal1');
}

const fecharModalPubli = () => {
    let modal = document.querySelector('.modalPubli');
    modal.classList.add('modal1');
}