// Selecionar todos os cards
let cards = document.querySelectorAll(".card-destino")

// Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o botão de favoritos)

cards.forEach(  function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade')
    let botaoFavorito = card.querySelector('.botao-favorito')
    let curiosidade = card.querySelector('.curiosidade')

    botaoCuriosidade.addEventListener("click", function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute("aria-expanded", "true");
            botaoCuriosidade.textContent = "Ocultar curiosidade"
        }
        else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute("aria-expanded", "false");
            botaoCuriosidade.textContent = "Ver curiosidade"
        }
    }); // Fechamento do código do botaoCuriosidade

    botaoFavorito.addEventListener("click", function(){
        // Aplicar/remover a classe 'favoritado'
        // Classe foi aplicada? true
        // Classe foi removida? false
        let favoritado = card.classList.toggle('favoritado');

        // Atualizar o estado do botão (arial-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado)

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado"
        } 
        else {
            botaoFavorito.textContent = "☆ Favorito"
        }
    })

}); // Fechamento do forEach