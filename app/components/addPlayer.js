const scoreboard = document.querySelector('.placar')
const add = document.querySelector('#btn-add')
const inputScoreboard = document.querySelector('#floatingInput')

let players = [{
    name: "Machine",
    wins: 0,
    draws: 0,
    defeats: 0,
    points: 0,
    delete: false
}];


inputScoreboard.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        add.click()
    }
})

add.addEventListener('click', function() {

    const playerName = document.querySelector('#floatingInput').value;

    if (playerName.length == 0, isNaN(playerName) === false) {
        alert("[ERROR] This name isn't available.");
    } else {
        players.push({
            name: playerName,
            wins: 0,
            draws: 0,
            defeats: 0,
            points: 0,
            delete: true
        });

    }
    showPlayers();
    document.querySelector('#floatingInput').value = "";
})

const table = document.querySelector('#player-table');

function showPlayers() {
    table.innerHTML = ''
    players.forEach(player => {
        let playerTable = document.createElement('tr')
        playerTable.innerHTML += `
            <td>${player.name}</td>
            <td>${player.wins}</td>
            <td>${player.draws}</td>
            <td>${player.defeats}</td>
            <td>${player.points}</td>
        `
        table.appendChild(playerTable)

        if(player.delete === true) {
            const deleteButton = document.createElement('button')
            deleteButton.classList.add('btn-close')
            playerTable.appendChild(deleteButton)

            deleteButton.addEventListener('click', function() {
                let indexPlayer = players.indexOf(player)
                if(indexPlayer > -1) {
                    playerTable.remove()
                    players.splice(indexPlayer, 1)
                    
                }
            })
        }
    })

}
    showPlayers(players);


// function calcularPontos(jogador, maquina) {
//     let pontos = jogador.vitorias * 5 + jogador.empate;
//     return pontos
// }

// function score(player, machine) {

// }