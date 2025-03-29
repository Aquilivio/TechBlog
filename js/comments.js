document.addEventListener("DOMContentLoaded", function () {
  const formularioComentario = document.getElementById("comment-form");
  const listaComentarios = document.getElementById("comments-list");

  // Carregar comentários ao iniciar
  carregarComentarios();

  // Adicionar evento de envio ao formulário
  formularioComentario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter valores dos campos
    const nome = document.getElementById("comment-name").value;
    const email = document.getElementById("comment-email").value;
    const texto = document.getElementById("comment-text").value;

    // Validar campos
    if (!nome || !texto) {
      alert("Por favor, preencha pelo menos o nome e o comentário");
      return;
    }

    // Criar objeto do comentário
    const novoComentario = {
      nome,
      email,
      texto,
      data: new Date().toLocaleDateString("pt"),
    };

    // Adicionar comentário à lista
    adicionarComentario(novoComentario);

    // Salvar comentário
    salvarComentario(novoComentario);

    // Limpar formulário
    formularioComentario.reset();
  });

  // Função para adicionar comentário à página
  function adicionarComentario(comentario) {
    const elementoComentario = document.createElement("div");
    elementoComentario.classList.add("comment");

    // Criar iniciais para o avatar
    const iniciais = comentario.nome
      .split(" ")
      .map((nome) => nome[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);

    elementoComentario.innerHTML = `
            <div class="comment-avatar">${iniciais}</div>
            <div class="comment-content">
                <div class="comment-author">${comentario.nome}</div>
                <div class="comment-date">${comentario.data}</div>
                <div class="comment-text">${comentario.texto}</div>
            </div>
        `;

    listaComentarios.prepend(elementoComentario);
  }

  // Função para salvar comentário no localStorage
  function salvarComentario(comentario) {
    let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.push(comentario);
    localStorage.setItem("comentarios", JSON.stringify(comentarios));
  }

  // Função para carregar comentários do localStorage
  function carregarComentarios() {
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

    if (comentarios.length === 0) {
      listaComentarios.innerHTML =
        "<p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>";
      return;
    }

    comentarios.forEach((comentario) => {
      adicionarComentario(comentario);
    });
  }
});
