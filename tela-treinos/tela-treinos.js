// Clicar em card de treino
document.querySelectorAll('.treino-card').forEach(card => {
  card.addEventListener('click', () => {
    const treino = card.dataset.treino;
    abrirTreino(treino);
  });
});

document.getElementById('voltar-treinos').addEventListener('click', () => {
  trocarTela('treinos', 'inicial');
});