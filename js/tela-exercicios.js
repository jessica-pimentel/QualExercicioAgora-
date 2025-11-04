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

// Botão voltar
document.getElementById('voltar-exercicios').addEventListener('click', () => {
  trocarTela('exercicios', 'treinos');
});