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

        // Chama a função de atualização toda vez que clicar no botaoFavorito
        atualizarContadorFavoritos();
    
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

// Versão 4: script para contagem de favoritos

// Selecionando o elemento que paresenta a quantidade de favorito
const quantidadeFavoritos = document.querySelector("#quantidade-favoritos");

// Função para atualização dos favoritos
function atualizarContadorFavoritos(){

    // Guardar em memória a contagem, começando em zero
    let quantidade = 0;

    // Percorrer todos os cards, inclusive os ocultos pelos filtros
    cards.forEach(function(card){
        // Verificar se o card possui a classe "favoritado"
        if(card.classList.contains("favoritado")){
            // Se possuir, incrementamos a variável quantidade
            // Incrementar significa adicionar
            quantidade++
        }
    }); // Final forEach

    // Após a contagem, atualiza o número exibido no span HTML
    quantidadeFavoritos.textContent = quantidade;

} // Final da função atualizarContadorFavoritos


// Versão 6: curiosidades aleatórias com controle de repetição
const tituloCuriosidadeAleatoria = document.querySelector("#titulo-curiosidade-aleatoria");

const explicacaoCuriosidadeAleatoria = document.querySelector("#explicacao-curiosidade-aleatoria");

const botaoCuriosidadeAleatoria = document.querySelector(".botao-curiosidade-aleatoria");

// Lista de curiosidades a serem usadas pela função
const curiosidadesUniverso = [
  {
    titulo: "A luz do Sol não chega instantaneamente à Terra",
    explicacao: "A luz viaja pelo espaço e leva cerca de 8 minutos para chegar até nós."
  },
  {
    titulo: "Em Vênus, um dia é mais longo que um ano",
    explicacao: "Vênus leva cerca de 243 dias terrestres para girar uma vez em torno do próprio eixo e cerca de 225 dias para completar uma órbita ao redor do Sol."
  },
  {
    titulo: "Marte tem duas luas pequenas",
    explicacao: "As luas de Marte se chamam Fobos e Deimos. Elas têm formas irregulares, diferentes da forma quase esférica da Lua da Terra."
  },
  {
    titulo: "Júpiter tem uma tempestade gigante",
    explicacao: "A Grande Mancha Vermelha é uma enorme tempestade na atmosfera de Júpiter. Ela é mais larga que a Terra e vem sendo observada há séculos."
  },
  {
    titulo: "Europa pode esconder um oceano",
    explicacao: "A lua Europa, de Júpiter, tem uma crosta de gelo. Observações indicam que pode haver um oceano de água líquida sob essa superfície."
  },
  {
    titulo: "Uma lua de Júpiter é maior que Mercúrio",
    explicacao: "Ganimedes é a maior lua do Sistema Solar. Seu diâmetro é maior que o do planeta Mercúrio."
  },
  {
    titulo: "Os anéis de Saturno são feitos de muitos fragmentos",
    explicacao: "Eles contêm bilhões de pedaços de gelo e rocha, desde grãos muito pequenos até blocos enormes."
  },
  {
    titulo: "A Lua mantém quase sempre a mesma face voltada para a Terra",
    explicacao: "A Lua leva praticamente o mesmo tempo para girar em torno de si e para dar uma volta ao redor da Terra. Por isso, vemos quase sempre o mesmo hemisfério."
  },
  {
    titulo: "Mercúrio pode ter gelo em crateras escuras",
    explicacao: "Em crateras profundas próximas aos polos, há regiões que nunca recebem luz solar direta. Essas áreas podem conservar gelo de água apesar do calor em outras partes do planeta."
  },
  {
    titulo: "O Sol também se move pela galáxia",
    explicacao: "O Sol e seu sistema planetário orbitam o centro da Via Láctea. Uma volta completa leva cerca de 230 milhões de anos terrestres."
  },
  {
    titulo: "A Via Láctea é uma galáxia espiral barrada",
    explicacao: "Ela tem uma região central alongada, em forma de barra, e braços espirais. O Sistema Solar fica numa região chamada Braço de Órion."
  },
  {
    titulo: "Há planetas que orbitam duas estrelas",
    explicacao: "Alguns exoplanetas, que são planetas fora do Sistema Solar, orbitam um par de estrelas em vez de uma estrela só."
  },
  {
    titulo: "Urano gira quase de lado",
    explicacao: "Seu eixo é inclinado em cerca de 98°. Por isso, o planeta tem estações extremas e partes de um hemisfério podem passar até 42 anos terrestres sem receber luz solar direta."
  },
  {
    titulo: "Titã tem lagos de metano e etano líquidos",
    explicacao: "Na maior lua de Saturno, hidrocarbonetos evaporam, formam nuvens, caem como chuva e alimentam lagos — um ciclo parecido com o da água na Terra."
  },
  {
    titulo: "O pôr do sol em Marte pode parecer azul",
    explicacao: "Partículas finas de poeira na atmosfera marciana espalham a luz de um modo que deixa o azul mais visível perto do Sol quando ele se põe."
  },
  {
    titulo: "As montanhas de Plutão podem ser feitas de água congelada",
    explicacao: "Na temperatura extremamente baixa de Plutão, o gelo de água é rígido como rocha e consegue formar montanhas; outros gelos, como metano e nitrogênio, cobrem partes da superfície."
  },
  {
    titulo: "O sistema TRAPPIST-1 tem sete mundos rochosos",
    explicacao: "A cerca de 40 anos-luz da Terra, sete planetas de tamanho parecido com o terrestre orbitam uma estrela anã vermelha. Todos caberiam dentro da órbita de Mercúrio."
  },
  {
    titulo: "Io é o mundo mais vulcânico do Sistema Solar",
    explicacao: "A lua de Júpiter tem centenas de vulcões. A força gravitacional de Júpiter e de luas vizinhas como Europa e Ganimedes aquece seu interior e alimenta essa atividade."
  }
];

// Guarda as três últimas curiosidades para impedir repetições imediatas.
const historicoCuriosidades = [];

function exibirCuriosidadeAleatoria(){
    // Só sorteia entre curiosidades que não apareceram nas três últimas exibições.
    const indicesDisponiveis = curiosidadesUniverso
      .map((_, indice) => indice)
      .filter(indice => !historicoCuriosidades.includes(indice));
    const indiceAleatorio = indicesDisponiveis[Math.floor(Math.random() * indicesDisponiveis.length)];
    const curiosidadeEscolhida = curiosidadesUniverso[indiceAleatorio];

    historicoCuriosidades.push(indiceAleatorio);
    if (historicoCuriosidades.length > 3) {
      historicoCuriosidades.shift();
    }

    tituloCuriosidadeAleatoria.textContent = curiosidadeEscolhida.titulo;
    explicacaoCuriosidadeAleatoria.textContent = curiosidadeEscolhida.explicacao;
}
 
botaoCuriosidadeAleatoria.addEventListener("click", exibirCuriosidadeAleatoria);

// Chamar a funcção de forma automatica no momento da entrada no site
exibirCuriosidadeAleatoria();
