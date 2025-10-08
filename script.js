// --- Dados dos Treinos ---
const treinos = {
  A: [
    { nome: "Terra sumô halter", info: "3x15", img: "img/terra.jpg" },
    { nome: "Cadeira flexora", info: "4x15", img: "img/flexora.jpg" },
    { nome: "Mesa flexora", info: "3x10-12", img: "img/mesa.jpg" },
    { nome: "Elevação pélvica", info: "3x12", img: "img/pelvica.jpg" },
    { nome: "Cadeira abdutor", info: "4x12", img: "img/abdutor.jpg" },
    { nome: "Glúteo cross", info: "4x12", img: "img/gluteo.jpg" },
    { nome: "Lombar máquina", info: "3x12", img: "img/lombar.jpg" }
  ],
  B: [
    { nome: "Supino reto halter", info: "4x12", img: "img/supino_reto.jpg" },
    { nome: "Supino inclinado halter", info: "4x12", img: "img/supino_inclinado.jpg" },
    { nome: "Supino declinado", info: "3x10-12", img: "img/supino_declinado.jpg" },
    { nome: "Desenvolvimento máquina", info: "3x15", img: "img/desenvolvimento.jpg" },
    { nome: "Bi set: Elevação lateral + frontal", info: "3x15 cada", img: "img/elevacao_lateral.jpg" },
    { nome: "Tríceps máquina", info: "3x15", img: "img/triceps.jpg" }
  ],
  C: [
    { nome: "Agachamento livre", info: "3x15", img: "img/agachamento_livre.jpg" },
    { nome: "Agachamento hack", info: "4x15", img: "img/hack.jpg" },
    { nome: "Leg press 45", info: "4x12", img: "img/legpress.jpg" },
    { nome: "Cadeira extensora", info: "4x12", img: "img/extensora.jpg" },
    { nome: "Afundo", info: "3x15", img: "img/afundo.jpg" },
    { nome: "Supra solo", info: "3x20", img: "img/supra.jpg" }
  ],
  D: [
    { nome: "Pulley costas", info: "4x12", img: "img/pulley.jpg" },
    { nome: "Remada fechada", info: "4x12", img: "img/remada.jpg" },
    { nome: "Face pull", info: "4x10-12", img: "img/facepull.jpg" },
    { nome: "Voador inverso", info: "4x12", img: "img/voador.jpg" },
    { nome: "Rosca direta halteres", info: "3x12", img: "img/rosca_direta.jpg" },
    { nome: "Rosca martelo", info: "3x12", img: "img/martelo.jpg" },
    { nome: "Supra bola", info: "3x15", img: "img/supra_bola.jpg" }
  ]
};

// --- Navegação entre telas ---
const telas = {
  inicial: document.getElementById('tela-inicial'),
  treinos: document.getElementById('tela-treinos'),
  exercicios: document.getElementById('tela-exercicios'),
  detalhe: document.getElementById('tela-detalhe')
};

function trocarTela(de, para) {
  telas[de].classList.remove('ativa');
  telas[para].classList.add('ativa');
}

// Botão começar
document.getElementById('btnComecar').addEventListener('click', () => {
  trocarTela('inicial', 'treinos');
});

// Seleção de treino
document.querySelectorAll('.treino-card').forEach(card => {
  card.addEventListener('click', () => {
    const treino = card.dataset.treino;
    abrirTreino(treino);
  });
});

// --- Listar exercícios ---
const listaExercicios = document.getElementById('lista-exercicios');
const tituloTreino = document.getElementById('titulo-treino');

function abrirTreino(treino) {
  tituloTreino.textContent = `Treino ${treino}`;
  listaExercicios.innerHTML = '';

  treinos[treino].forEach(ex => {
    const div = document.createElement('div');
    div.className = 'exercicio';
    div.textContent = ex.nome;
    div.addEventListener('click', () => abrirDetalhe(ex));
    listaExercicios.appendChild(div);
  });

  trocarTela('treinos', 'exercicios');
}

// --- Tela de detalhe ---
const detalheNome = document.getElementById('detalhe-nome');
const detalheInfo = document.getElementById('detalhe-info-texto');
const detalheImg = document.getElementById('detalhe-img');

function abrirDetalhe(ex) {
  detalheNome.textContent = ex.nome;
  detalheInfo.textContent = ex.info;
  detalheImg.src = ex.img;
  trocarTela('exercicios', 'detalhe');
}

// Botões voltar
document.getElementById('voltar-treinos').addEventListener('click', () => {
  trocarTela('treinos', 'inicial');
});

document.getElementById('voltar-exercicios').addEventListener('click', () => {
  trocarTela('exercicios', 'treinos');
});

document.getElementById('voltar-detalhe').addEventListener('click', () => {
  trocarTela('detalhe', 'exercicios');
});
