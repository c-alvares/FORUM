let inputTema = document.querySelector('#inputTema');
let inputImg = document.querySelector('#inputImg');
let btCriarTema = document.querySelector('#criar');

btCriarTema.addEventListener('click', () => {
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: {"nome":inputTema.value,"foto":inputImg.value}
      };
      console.log(options);
      
      fetch('http://localhost:3000/criarTemas', options)
        .then(response => response.json())
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
    
    



const abrirModalMenu = () => {
    let modal = document.querySelector('.menuLateral');
    modal.classList.remove('modal');
}

const fecharModalMenu = () => {
    let modal = document.querySelector('.menuLateral');
    modal.classList.add('modal');
}

const modalCriarTema = () => {
    let modal = document.querySelector('.modalTema');
    modal.classList.remove('modal1');
}

const fecharModalTema = () => {
    let modal = document.querySelector('.modalTema');
    modal.classList.add('modal1');
}

