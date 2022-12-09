let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');

let listaCards = document.querySelector('.listaCards');

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
            if( response == 201 ) {
                alert("Tema cadastrado com sucesso")
                window.location.reload()
            }else {
                alert('Falha ao cadastrar novo tema')
            }
        })
        .catch(err => console.error(err));
})
    


function carregarCards() {
    const options = {method: 'GET'};

    fetch('http://localhost:3000/listarTemas', options)
      .then(response => response.json())
      .then(response => {
        response.forEach(tema => {
            var abrirDiv = document.querySelector('.card1').cloneNode(true)
            abrirDiv.classList.remove('clone1')
            // abrirDiv.querySelector('#pic1').src = tema.foto
            abrirDiv.querySelector('#tema').innerHTML = tema.nome

            listaCards.appendChild(abrirDiv)
        })
      })
      .catch(err => console.error(err));
}

const modalCriarTema = () => {
    let modal = document.querySelector('.modalTema');
    modal.classList.remove('modal1');
}

const fecharModalTema = () => {
    let modal = document.querySelector('.modalTema');
    modal.classList.add('modal1');
}