// Selecionar todos os cards
let cards = document.querySelectorAll('.card-destino');
 
// Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');
 
    botaoCuriosidade.addEventListener('click', function () {
        if (curiosidade.hidden) {
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute('aria-expanded', 'true');
            botaoCuriosidade.textContent = "Ocultar curiosidade"
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute('aria-expanded', 'false');
            botaoCuriosidade.textContent = "Ver curiosidades";
 
        }
    }); // fechamento do codigo fo botaoCuriosidade
 
    botaoFavorito.addEventListener('click', function () {
        // Aplicar/Remover a classe 'favoritado'
        // Classe foi aplicada? true
        // Classe foi removida? false
        let favoritado = card.classList.toggle('favoritado');
 
        //Atualizar o estado do botao (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado);
 
 
        //atualizar o texto do botao (☆ favorito ou ★ favoritado)
        if (favoritado) {
            botaoFavorito.textContent = "★ Favoritado";
        } else {
            botaoFavorito.textContent = "☆ Favorito";
        }
    });//fechamento do botao fav
 
}); // fechamento do foreach
 
 
/* V2: programação para o recurdso de filtragem de destinod*/
 
// procurar e selecionar os botoes de filtro
 
const botoesFiltro = document.querySelectorAll("[data-filtro]");
 
//percorrer/acessar cada botao dentro do botoesfiltro
botoesFiltro.forEach(function (botaoFiltro) {
 
    botaoFiltro.addEventListener('click', function () {
        // acesamos e guardamos qual fltro foi escolhido
        const filtro = botaoFiltro.dataset.filtro;
 
        //percorrendo cada card...
        cards.forEach(function (card) {
            //...quardando a categoria de cada um
            const categoria = card.dataset.categoria
 
            //Se o valor de filtro for "todos" OU se a categoria for igual ao filtro
            if (filtro === "todos" || categoria === filtro) {
                //então mudamos o card
                card.hidden = false;
            } else {
                //se nao, escondemos o card
                card.hidden = true;
            }
 
        })  //fechamento do forEach dos cards
 
        botoesFiltro.forEach(function(botaofiltro){

            if(botaofiltro.dataset.filtro === filtro){
                // Se for, adicionamos a classe nele
                 botaoFiltro.classList.add("filtro-ativo");
 
                 //E mudamos o estado para pressionado/ativado (true)
                 botaoFiltro.setAttribute("aria-pressed", "true");
            } else{
                // Senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo");
 
                //e mudamos o estado para não-pressionado/desativado (false)
                 botaoFiltro.setAttribute("aria-pressed", "false");
            }
 
 
        });
 
    })//fechamento do event listener
 
})// fechamento forEach