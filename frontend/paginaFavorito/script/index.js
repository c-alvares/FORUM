// var fechar = document.querySelector('#fechar')
// var img = document.querySelector('#avatar')
// var favoritos = document.querySelector('#favoritos')
var abrirModal = document.querySelector('.abrir')
// var user = document.querySelector('#user')
var publi = document.querySelector('#publi')
var divFavoritos = document.querySelector('.divFavoritos')
// var fecharFav = document.querySelector('#fecharFav')
// var avatar = document.querySelector('#avatarU')
var id = localStorage.getItem('id_user')

function carregar() {
  
                            divFavoritos.classList.remove('model')
                            fetch('http://localhost:3000/listarPublicacoes')
                                .then(resp => { return resp.json() })
                                .then(pub => {
                                    pub.forEach(p => {
                                       
                            divFavoritos.classList.remove('model')

                            fetch('http://localhost:3000/listarFavoritos')
                                .then(resp => { return resp.json() })
                                .then(fav => {
                                    fav.forEach(f => {
                                      if(f.id_publi == p.id_publi){
                                        var abrirDiv = document.querySelector('.abrir').cloneNode(true)
                                        abrirDiv.classList.remove('model')
                                
                                        console.log(f)
                                        abrirDiv.querySelector('#avatarU').src = '../../../../assets/' + f.img
                                        abrirDiv.querySelector('#user').innerHTML = f.user_name
                                        abrirDiv.querySelector('#publi').innerHTML = p.publicacoes
                        
                                        divFavoritos.appendChild(abrirDiv)
                                    }
                        
                                    })
                                    })
                                })
                                })
                        }
                        

                                //     })
                                // })
                        
                    
                
