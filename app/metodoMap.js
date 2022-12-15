function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}
//Quando colocamos as reticências ... e escrevoemos livro, ele vai fazer uma cópia de todo o nosso array, ou do nosso objeto existente, para outro objeto.