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

        // Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado)

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent = "★ Favoritado"
        } 
        else {
            botaoFavorito.textContent = "☆ Favorito"
        }
    }); // Fechamento do botao favorito
}); // Fechamento do forEach

// V2: programação para o recurso de filtragem de destinos

// Procurar e selecionar os botoes de filtro

const botoesFiltro = document.querySelectorAll("[data-filtro]");

// Percorrer/acessar cada botao dentro do botoesFiltro
botoesFiltro.forEach(function(botaoFiltro){
    
    // Quando acontecer o clique no botão...
    botaoFiltro.addEventListener("click", function(){
        // ... acessamos e guardamos o filtro escolhido

        const filtro = botaoFiltro.dataset.filtro;
        
        // Percorrendo cada card...
        cards.forEach(function(card){
            // ... e guardando a categoria de cada um
            const categoria = card.dataset.categoria;

            // SE o valor de filtro for "Todos" OU se a categoria for igual ao filtro
            if(filtro === "todos" || categoria === filtro){
                // Então mostramos o card
                card.hidden = false;
            } else {
                // Senão, escondemos o card
                card.hidden = true;
            }

        }); // fechamento do forEach dos cards

        // Para cada botão de filtro...
        botoesFiltro.forEach(function(botaoFiltro){

            // ... verificamos se o botao atual que foi clicado é o mesmo do filtro
            if(botaoFiltro.dataset.filtro === filtro){
                // se for, adicionamos a classe nele
                botaoFiltro.classList.add("filtro-ativo");

                // E mudam o estado para pressionado/ativado (true)
                botaoFiltro.setAttribute("aria-pressed", "true");
            } else{
                // Senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo");

                // E mudamos o estado para não-pressionado/desativado (false)
                botaoFiltro.setAttribute("aria-pressed", "false");
            }
        }); //fechamento forEach botoesFiltro
    }); // fechamento event listener
}); // fechamento forEach
    
// Versão 3: script para o menu responsivo

// Selecionando os elementos que serão manipulados
const botaoMenu = document.querySelector(".botao-menu");

// Navegação principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal");

// Detectando o acionamento do botão
botaoMenu.addEventListener("click", function(){
    // Ao clicar no botaoMenu, o JS deve aplicar ou remover a classe "menu-aberto"
    // Classe aplicada? true
    // Classe removida? false
    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto");

    
    // EXERCÍCIO
    // Atualizar o estado do botão usando aria-expanded
    botaoMenu.setAttribute("aria-expanded", menuAberto);
    // Se o menu estiver ABERTO, mostre no botão ✖ Fechar
    if(menuAberto){
        botaoMenu.textContent = "✖ Fechar"
     // Se o menu estiver FECHADO, mostre no botão ☰ Menu
    } else {
        botaoMenu.textContent = "☰ Menu"
    }
    

});