// Mapeamento de telas
const telas = {
  inicial: document.getElementById('tela-inicial'),
  treinos: document.getElementById('tela-treinos'),
  exercicios: document.getElementById('tela-exercicios'),
  detalhe: document.getElementById('tela-detalhe')
};

// Função para trocar de tela
function trocarTela(de, para) {
  telas[de].classList.remove('ativa');
  telas[para].classList.add('ativa');
}