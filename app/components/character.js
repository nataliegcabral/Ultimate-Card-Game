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

    //assim que possível conseguir melhorar esse codigo pra verificar se qualquer uma das checkboxes não está checada, e dar um aviso para selecionar um, mas sem repetir no for
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
                } else if (playerAttributes[i].value > machineAttributes[i].value) {
                    res.innerHTML = `<span class="fs-2 fw-bold text-success">Player win!</span>`
                    console.log(playerAttributes[i].disabled)
                } else if (playerAttributes[i].value < machineAttributes[i].value) {
                    res.innerHTML = `<span class="fs-2 fw-bold text-danger">Machine win!</span>`
                }

                playAgain.disabled = false
                
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
