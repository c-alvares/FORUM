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