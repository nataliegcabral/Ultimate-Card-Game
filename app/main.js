// finn, jake, princesa jujuba, princesa caroço, marceline, rei gelado, bmo, princesa de fogo, prismo, dona tromba, canelinha

let personagens = []
const personagensAPI = 'https://nataliegcabral.github.io/personagens/lista.json'
const sortear = document.querySelector('.sortear')

//-------------------------SENDO FEITO:
//sortear carta

buscarPersonagens()

async function buscarPersonagens() {
    const res = await fetch(personagensAPI)
    personagens = await res.json()
    
};

sortear.addEventListener('click', sortearCarta)

function sortearCarta() {
    return parseInt(Math.random() * personagens.length)
}

console.log(sortearCarta())


let maquina = {
    nome: "Máquina",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};



//----------------------A FAZER:
//exibir opções
//obter atributo
//jogar
//exibir carta jogador
//exibir carta maquina


//----------------------PRONTOS:
//adicionar jogador FEITO

//jogar novamente FEITO
 const jogarNovamente = document.querySelector('#btn-jogar-novamente')
 jogarNovamente.addEventListener('click', () => {
     window.location.reload()
 })
