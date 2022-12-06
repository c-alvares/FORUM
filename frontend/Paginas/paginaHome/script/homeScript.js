const AbrirModalMenu = () => {
    const modal = document.querySelector('.modal');
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
        modal.style.display = 'none';
    }else {
        modal.style.display = 'block';
    }
}

const btn = document.querySelector('#menu')
btn.addEventListener('click', AbrirModalMenu)

window.onclick = function(event) {
    const modal = document.querySelector('.modal');
    if (event.target == modal) {
        AbrirModalMenu()
    }
}