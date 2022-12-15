let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

// Queremos que essa função seja assíncrona porque em nossa API estamos utilizando um projeto com alguns livros. Mas vamos supor que tenhamos onze milhões de livros cadastrados, essa função demoraria muito e provavelmente teríamos um erro.

// Para dizer que essa função precisa esperar uma promessa de receber todos os livros desse endpoint, vamos usar o await

// O método forEach() executa uma dada função em cada elemento de um array.

// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.