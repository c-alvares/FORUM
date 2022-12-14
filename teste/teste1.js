// function carregarCards() {
    //   const options = { method: 'GET' };
    
    //   fetch('http://localhost:3000/listarTemas', options)
    //     .then(response => response.json())
    //     .then(response => {
    //       response.forEach(tema => {
    //         let abrirDiv = document.querySelector('.card1').cloneNode(true)
    //         abrirDiv.classList.remove('clone1')
    //         abrirDiv.querySelector('#pic1').src = '../../../assets/' + tema.foto
    //         abrirDiv.querySelector('#tema').innerHTML = tema.nome
    
    //         listaCards.appendChild(abrirDiv)
    //       })
    //     })
    //     .catch(err => console.error(err));
    //       fetch('http://localhost:3000/listarPublicacoes')
    //         .then(response => response.json())
    //         .then(response => {
    //           response.forEach(p => {
    //             fetch('http://localhost:3000/forum/listar')
    //               .then(response => response.json())
    //               .then(response => {
    //                 response.forEach(user => {
    //                   if (p.id_user == user.id_user) {
    //                     let publicacoes = document.querySelector('.publicacoes').cloneNode(true);
    //                     publicacoes.classList.remove('modal');
    //                     publicacoes.querySelector('#publicacao').innerHTML = p.publicacoes;
    //                     publicacoes.querySelector("#avatarPubli").src = '../../../assets/' + user.img
    //                     publicacoes.querySelector("#userPubli").innerHTML = user.user_name
    
    
    //                     document.querySelector('nav').appendChild(publicacoes)
    //                   }
    //                 })
    //               })
    //           })
    //         })
    
    // }

      // modalPesquisa.addEventListener('click', () => {
    //   const options = { method: 'GET' };

    //   fetch(uri, options)
    //     .then(response => response.json())
    //     .then(response => {
    //       response.forEach(tema => {
    //         let abrirDiv = document.querySelector('.card1').cloneNode(true)
    //         abrirDiv.classList.remove('clone1')
    //         abrirDiv.querySelector('#pic1').src = '../../../assets/' + tema.foto
    //         abrirDiv.querySelector('#tema').innerHTML = tema.nome

    //         listaCards.appendChild(abrirDiv)
    //       })
    //     })
    //     .catch(err => console.error(err));

    //   fetch('http://localhost:3000/forum/listar')
    //     .then(response => response.json())
    //     .then(response => {
    //       response.forEach(usuario => {
    //         avatar.src = '../../../assets/' + usuario.img
    //       })
    //       fetch('http://localhost:3000/listarPublicacoes')
    //         .then(response => response.json())
    //         .then(response => {
    //           response.forEach(p => {
    //             fetch('http://localhost:3000/forum/listar')
    //               .then(response => response.json())
    //               .then(response => {
    //                 response.forEach(user => {
    //                   if (p.id_user == user.id_user) {
    //                     let publicacoes = document.querySelector('.publicacoes').cloneNode(true);
    //                     publicacoes.classList.remove('modal');
    //                     publicacoes.querySelector('#publicacao').innerHTML = p.publicacoes;
    //                     publicacoes.querySelector("#avatarPubli").src = '../../../assets/' + user.img
    //                     console.log()
    //                     publicacoes.querySelector("#userPubli").innerHTML = user.user_name

    //                     document.querySelector('nav').appendChild(publicacoes)
    //                   }
    //                 })
    //               })
    //           })
    //         })
    //     })
    // })