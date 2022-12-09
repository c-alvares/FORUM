let btInstagram = document.querySelector('#instagram');
let btPinterest = document.querySelector('#pinterest');

const abrirModalMenu = () => {
    let modal = document.querySelector('.menuLateral');
    modal.classList.remove('modal');
}

const fecharModalMenu = () => {
    let modal = document.querySelector('.menuLateral');
    modal.classList.add('modal');
}

btInstagram.addEventListener('click', () => {
    window.location.href = "https://www.instagram.com/p/Civ3pzIuIM1/?igshid=NTFIDUzZmM=";
}
)
btPinterest.addEventListener('click', () => {
    window.location.href = "https://br.pinterest.com/beatrizgabrielago/receitas/";
})

