// LISTA DE FILMES
// // Aqui ficam os dados. Você só adiciona/edita e o site já mostra automaticamente.
const filmes = [
  {
    titulo: "AFTS 1 — A Origem do Mal",
    elenco: "Artur Coelho, Andrey Vieira, Gabriel Vitor, Mateus Tiago, Samuel Erivaldo, Fernanda Cabral, Geane Vieira, Elisangela Ayres, ..",
    sinopse: " No ETE Cícero Dias, um grupo de estudantes recém-chegados tenta lidar com a avalanche de trabalhos e atividades que parece nunca parar. A pressão atinge o limite quando Artur desaparece sem explicação. Dias depois, ele retorna… mas algo nele não volta junto. O olhar é estranho, os silêncios são longos demais, e a escola começa a reagir à presença dele de formas que ninguém consegue explicar. Agora, eles precisam sobreviver ao que quer que tenha voltado no lugar do amigo, entender seus motivos e descobrir a verdade antes que a próxima ausência seja definitiva. deOsperta silenciosamente enquanto o grupo descobre segredos antigos.",
    image: "AFTS (2025).png"   // // Nome EXATO da foto dentro da pasta assets/
  },
  {
    titulo: "AFTS 2 — O Mal Sempre Volta, e Cada Vez Pior",
    elenco: "Artur Coelho, Andrey Vieira, Gabriel Vitor, Mateus Tiago, Samuel Erivaldo, Renato Marques Moura, João Guilherme, Thulio Barbosa, ..",
    sinopse: "Após conseguirem libertar Artur, o grupo finalmente respira… mas só por alguns segundos. Porque a entidade que o dominava não desapareceu — apenas pulou para o próximo corpo que encontrou. E dessa vez, ela não está escondida. Ela quer brincar. Começam a surgir registros perturbadores pela escola: fotos que mostram alguém com o rosto distorcido, comportamentos que não combinam com a pessoa real, ataques rápidos demais para serem humanos e marcas que parecem feitas por algo que não deveria existir. O grupo percebe o horror óbvio: eles salvaram Artur, mas abriram espaço para o mal se fortalecer. Agora ele conhece cada fraqueza deles — e está usando seu novo hospedeiro como arma. Agora, eles precisam descobrir quem está sendo controlado, como deter a entidade antes que ela mude de corpo outra vez… e antes que o próximo a ser escolhido seja alguém que eles não podem perder.",
    image: "AFTS 2 (2025).png"
  },  
  {
    titulo: "N1 — O Mal se Manifesta de Diversas Formas",
    elenco: "Gabriel Vitor, Mateus Tiago, Judith Butler, Renato Marques, Tobin Bell, Regina Hall",
    sinopse: "Entre AFTS 1 e N1, o ETE entrou num período que ninguém gosta de comentar. Gabriel Vitor e Mateus Tiago mostram o que realmente aconteceu nesse intervalo: sustos que ninguém explica, traumas que ninguém assume e situações cômicas que só parecem engraçadas porque a alternativa seria surtar junto. Enquanto isso, o antigo grupo se despedaçou. Depois da morte de Artur, Samuel se isolou no mundo dos jogos para lidar com a depressão pós-trauma, e Andrey acabou internado após uma sequência de surtos. Com os dois fora de cena, Gabriel e Mateus ficaram no centro da confusão — tentando entender um ambiente que parecia piorar a cada semana. Entre teorias estranhas, “jogos” que ninguém pediu e aparições de figuras improváveis como Judith Butler, John Kramer e Brenda Ricks, o cenário se transforma numa mistura de tensão e humor que desafia qualquer lógica. Será que esse dupla consegue segurar as pontas e entender a partir daí o que realmente virá no futuro?",
    image: "N1 (2025).png"
  },
  {
    titulo: "GEOGRAFADOS — Um Por Todos, e Todos em Pânico!",
    elenco: "Andrey Vieira, Artur Coelho, Daniela de Assis, Gabriel Vitor, Mateus Tiago, Samuel Erivaldo, Tia Fernanda",
    sinopse: "Depois dos eventos de N1, o Time Oito achava que já tinha sobrevivido ao pior. Achou errado. Com o retorno inesperado de Andrey Vieira, recém-saído de um hospital psiquiátrico, e Samuel Erivaldo, completamente imerso no universo dos jogos após o trauma, o grupo tenta se reencontrar… mas o semestre decide que não vai colaborar. O grupo achava que já tinha sobrevivido ao pior. Achou errado. Em mais um período de sobrecarga absoluta, eles descobrem que existe um novo — e hilariamente perigoso — inimigo em comum: Daniela de Assis, a maior geógrafa do universo, que decidiu que dar aula não basta… ela quer roubar o planeta Terra inteiro usando um buraco negro estrategicamente estacionado no espaço. Agora, entre trabalhos, crises existenciais e forças gravitacionais nada amigáveis, eles precisam impedir que a professora mais poderosa da galáxia transforme o mundo em seu souvenir pessoal. A pergunta é simples: eles conseguem carregar o peso, a gravidade… e literalmente o planeta inteiro nas costas?",
    image: "GEOGRAFADOS (2025).png"
  },
  {
    titulo: "AFTS 3 — Cada Acerto é Milagre, e Cada Erro Vira um Espetáculo Patacumbástico", 
    elenco: "Andrey Vieira, Mateus Tiago, Artur Coelho, Gabriel Vitor, Samuel Erivaldo, Daniela de Assis, Sheyla Mafra, Edja Costa, Raphael Albino, Jeniffer Dantas, Juvenal, Henrique Samuel, Davi Neres, Luana Dantas, ..",
    sinopse: "No ápice da saga, AFTS 3 marca o grande retorno do Time Oito para encerrar o primeiro ciclo — e, claro, enfrentar mais uma ameaça escolar que ninguém pediu, mas todo mundo teme: as AFTS Finais. Desta vez, o terror vem com humor, caos e uma quantidade de comédia que beira o irresponsável. A antiga inimiga Daniela de Assis ressurge, acompanhada de novos antagonistas como Sheyla Mafra e Arthur Teti, que bagunçaram a escola inteira sem dó. E, para completar, o grupo descobre que não estava sozinho nessa luta. Assim entram em cena Jeniffer Dantas, Juvenal e outras figuras iconicamente essenciais, incluindo uma participação absolutamente improvável de Dráuzio Varella, surgindo unicamente para derrubar mitos biológicos e também a paciência de algumas pessoas. Entre provas sem fim, trabalhos que desafiam a sanidade e códigos que parecem rodar eternamente, o Time Oito precisa decidir se está pronto para enfrentar as tão temidas avaliações finais — ou se vai acabar entrando para a história como o fracasso mais icônico e patacumbástico que o ETE já viu.",
    image: "AFTS 3 (2025) (1).png"
  },
  {
    titulo: "AFTS 6 — A Última Testemunha",
    elenco: "Malu, Yuri, Sofia",
    sinopse: "Com o fim se aproximando, apenas uma pessoa sabe toda a verdade.",
    image: "filme6.jpg"
  }
];


// ====================
// SELECIONANDO ELEMENTOS DO HTML
// ====================
const container = document.getElementById("filmes-container");
// // Onde os cards vão aparecer

const modal = document.getElementById("modal");
// // Modal inteiro (a tela escura)

const modalImg = document.getElementById("modalImg");
// // Imagem dentro do modal

const modalTitulo = document.getElementById("modalTitulo");
// // Título dentro do modal

const modalElenco = document.getElementById("modalElenco");
// // Elenco dentro do modal

const modalSinopse = document.getElementById("modalSinopse");
// // Sinopse dentro do modal

const closeBtn = document.getElementById("closeModal");
// // Botão X para fechar


// ====================
// CRIAR OS CARDS
// ====================
filmes.forEach((filme, index) => {
  // // Para cada filme, criar um card novo

  const card = document.createElement("div");
  card.className = "card";  // // Dá a classe de estilo ao card

  // // Conteúdo interno do card
  card.innerHTML = `
    <h2>${filme.titulo}</h2>
    <p>${filme.elenco}</p>
  `;

  // // Torna o card clicável → abre o modal
  card.addEventListener("click", () => abrirModal(index));

  // // Coloca o card na tela
  container.appendChild(card);
});


// ====================
// FUNÇÃO PARA ABRIR O MODAL
// ====================
function abrirModal(i) {
  modalImg.src = `assets/${filmes[i].image}`;
  // // Carrega a imagem correta

  modalTitulo.textContent = filmes[i].titulo;
  // // Mostra o título

  modalElenco.textContent = "Elenco: " + filmes[i].elenco;
  // // Mostra o elenco

  modalSinopse.textContent = "Sinopse: " + filmes[i].sinopse;
  // // Mostra a sinopse

  modal.style.display = "flex";
  // // Exibe o modal (ele estava escondido)
}


// ====================
// FECHAR O MODAL
// ====================
closeBtn.onclick = () => modal.style.display = "none";
// // Quando clicar no X → sumir

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
// // Fechar ao clicar fora da caixa também
