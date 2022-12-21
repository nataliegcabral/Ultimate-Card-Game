const placar = document.querySelector('.placar')
const adicionar = document.querySelector('#btn-add')

let maquina = {
    nome: "Máquina",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

let jogadores = [maquina];

adicionar.addEventListener('click', addJogador)

function addJogador() {
    const nomeJogador = document.querySelector('#iname').value;

    if (nomeJogador.length == 0, isNaN(nomeJogador) === false) {
        alert('[ERRO] O nome inserido é inválido.');
    } else {

        jogadores.push({
            nome: nomeJogador,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        });

    exibirJogadores(jogadores)  
    }


    document.querySelector('#iname').value = "";

}


const tabela = document.querySelector('#tabela-jogadores');

function exibirJogadores(jogadores) {
    tabela.innerHTML = ''
    jogadores.forEach(jogador => {

        tabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.empates}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.pontos}</td>
        </tr>
        `

        //  tabela.appendChild(botaoDeleta(jogadores.id))

    })

}


// function botaoDeleta(id) {
//     const elementoBotao = document.createElement('button')
//     elementoBotao.innerText = 'x'

//     elementoBotao.addEventListener('click', function() {
//         deletaJogador(this.parentNode, id)
//     })

//     return elementoBotao
// }



// function deletaJogador(tag, id) {
//     tag.remove()
// }


exibirJogadores(jogadores);



// function calcularPontos(jogador, maquina) {
//     let pontos = jogador.vitorias * 5 + jogador.empate;
//     return pontos
// }