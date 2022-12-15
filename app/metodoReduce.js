function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}



// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.