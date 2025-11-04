const detalheNome = document.getElementById('detalhe-nome');
const detalheInfo = document.getElementById('detalhe-info-texto');
const detalheImg = document.getElementById('detalhe-img');

function abrirDetalhe(ex) {
  detalheNome.textContent = ex.nome;
  detalheInfo.textContent = ex.info;
  detalheImg.src = ex.img;

  const repContainer = document.getElementById("rep-container");
  repContainer.innerHTML = "";

  for (let i = 1; i <= (ex.rep || 0); i++) {
    const btn = document.createElement("button");
    btn.classList.add("rep-btn");
    btn.textContent = i;

    btn.addEventListener("click", () => {
      btn.classList.toggle("checked");
    });

    repContainer.appendChild(btn);
  }

  trocarTela('exercicios', 'detalhe');
}

// Botão voltar
document.getElementById('voltar-detalhe').addEventListener('click', () => {
  trocarTela('detalhe', 'exercicios');
});