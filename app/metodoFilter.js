const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) // Pega p ID de todo elemento btn
    const categoria = elementoBtn.value //pega o valor do elemento
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

//O filter()método cria uma cópia superficial de uma parte de uma determinada matriz, filtrada apenas para os elementos da matriz fornecida que passam no teste implementado pela função fornecida

/*
OUTRA POSSIVEL SOLUÇÃO
const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    filtrarLivros(event.target.value);
  });
});

function filtrarLivros(categoria) {
  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);
  console.table(livrosFiltrados);
}

*/