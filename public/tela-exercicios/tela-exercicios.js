const listaExercicios = document.getElementById('lista-exercicios');
const tituloTreino = document.getElementById('titulo-treino');

function abrirTreino(treino) {
  treinoAtual = treino;

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

// --- Adicionar exercício ---
const btnAdd = document.getElementById("btn-add-exercicio");
const modal = document.getElementById("modal-add");
const btnSalvar = document.getElementById("salvar-exercicio");
const btnCancelar = document.getElementById("cancelar-exercicio");

let treinoAtual = null;

// Abrir modal
btnAdd.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fechar modal
btnCancelar.addEventListener("click", () => {
  modal.style.display = "none";
});

// Salvar exercício
btnSalvar.addEventListener("click", () => {
  const nome = document.getElementById("novo-nome").value;
  const rep = Number(document.getElementById("novo-rep").value);
  const info = document.getElementById("novo-info").value;
  const imgFile = document.getElementById("novo-img").files[0];

  if (!nome.trim()) {
    alert("Digite o nome do exercício");
    return;
  }

  // Se tiver imagem, converte para base64 temporariamente
  if (imgFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      salvarExercicio(nome, rep, info, e.target.result);
    };
    reader.readAsDataURL(imgFile);
  } else {
    salvarExercicio(nome, rep, info, "");
  }
});

function salvarExercicio(nome, rep, info, imgPath) {
  treinos[treinoAtual].push({
    nome,
    rep,
    info,
    img: imgPath
  });

  abrirTreino(treinoAtual);
  modal.style.display = "none";

  // limpar campos
  document.getElementById("novo-nome").value = "";
  document.getElementById("novo-rep").value = "";
  document.getElementById("novo-info").value = "";
  document.getElementById("novo-img").value = "";
}