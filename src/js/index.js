const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');
console.log(listaSelecaoPokedevs);

// click na lista 
 
listaSelecaoPokedevs.forEach(pokedev =>{
   pokedev.addEventListener('click',() =>
    {
        esconderCartaoPokedev();
    

    // O ID do cartão selecinado 
    const idPokedevSelecionado = mostarCartaoPokedev(pokedev);

    desativarPokedevNalistagem();
    AtivarPokedevNalistagem(idPokedevSelecionado);
  })

})



function AtivarPokedevNalistagem(idPokedevSelecionado) {
    const pokedevSelecionadoNalistagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNalistagem.classList.add('ativo');
}

function desativarPokedevNalistagem() {
    const pokedAtivoNalistagem = document.querySelector('.ativo');
    pokedAtivoNalistagem.classList.remove('ativo');
}

function mostarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = 'cartao-' + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add('aberto');
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
}

