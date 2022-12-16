const placar = document.querySelector('.placar')
const adicionar = document.querySelector('#btn-add')
const tabela = document.querySelector('#tabela-jogadores')

adicionar.addEventListener('click', () => {
    const nomeJogador = document.querySelector('#iname').value;
    jogadores.push({
        nome: nomeJogador,
        vitorias : 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    });

    nomeJogador.value = "";    
    
    if (nomeJogador.length != 0 && isNaN(nomeJogador) === true) {
        exibirJogadores(jogadores)
    } else {
        alert('[ERRO] O nome inserido é inválido.');
    }
});

let jogadores = [maquina];


function exibirJogadores(listaJogadores) {
    tabela.innerHTML = '';
    listaJogadores.forEach(jogador => {
        tabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.empates}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.pontos}</td>
        </tr>
        `
    })
}