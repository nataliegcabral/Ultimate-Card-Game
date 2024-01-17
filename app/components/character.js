export class Character {
    name
    strenght
    wisdom
    magic

    constructor(name) {
        this.name = name
    }
    
}

const btnPlay = document.querySelector('#btn-play')

const playAgain = document.querySelector('#btn-play-again')
playAgain.disabled = true

btnPlay.onclick = () => {
    
    const playerAttributes =  document.getElementsByName('options-player');
    const machineAttributes = document.getElementsByClassName('options-machine')


        for (let i = 0; i < playerAttributes.length; i++) {
            playerAttributes[i].disabled = true

            if(playerAttributes[i].checked == true) {

                let resContainer = document.querySelector('.result-container')
                let res = document.createElement('div')
                res.innerHTML = ''
                resContainer.appendChild(res)

                btnPlay.disabled = true
                btnPlay.classList.toggle('disabled')

                if(playerAttributes[i].value === machineAttributes[i].value) {
                    res.innerHTML = `<span class="fs-2 fw-bold text-primary">It's a draw!</span>`
                    
                    players.draws += 1
                    machine.draws += 1
                } else if (playerAttributes[i].value > machineAttributes[i].value) {
                    res.innerHTML = `<span class="fs-2 fw-bold text-success">Player win!</span>`
                    players.draws += 1
                } else if (playerAttributes[i].value < machineAttributes[i].value) {
                    res.innerHTML = `<span class="fs-2 fw-bold text-danger">Machine win!</span>`
                    machine.draws += 1
                }

                const spans = document.querySelectorAll('.li-span');
                spans.forEach(span => {
                    span.style.visibility = 'visible'
                });

                playAgain.disabled = false;
                
            }
                
        }        
}

playAgain.addEventListener('click', function() {
    location.reload(true)
})

//  let personagens = []

//  listaPersonagens()


//----------------------A FAZER:
//exibir opções
//obter atributo
//jogar
//exibir carta jogador
//exibir carta maquina


//----------------------PRONTOS:
//adicionar jogador FEITO

//jogar novamente FEITO
//  const jogarNovamente = document.querySelector('#btn-jogar-novamente')
//  jogarNovamente.addEventListener('click', () => {
//      window.location.reload()
//  })
