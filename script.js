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
