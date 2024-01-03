export class MachineCharacterView {
    character

    constructor (characters) {
        this.machineCardContainer = document.querySelector('.machine-card-container')
        this.characters = characters
    }

    render(randomCardMachine) {
        this.machineCardContainer.innerHTML = ''
    
            const machineCharacterCard = this.machineCharacter(randomCardMachine)
            this.machineCardContainer.appendChild(machineCharacterCard)
    }

    machineCharacter(character) {
        const machineCharacterCard = document.createElement('div')
        machineCharacterCard.classList.add('card-frame', character.constructor.class)

        machineCharacterCard.innerHTML = `
        <h2 class="fw-bold">Machine</h2>
        <div class="card m-4" style="width: 18rem;">
            <img src="assets/img/background.jpg" class="card-img-top" alt="...">
                <div class="card-body fs-6">
                    <h5 class="card-title">${character.constructor.class} ${character.name}</h5>

                    <ul type="none" class="text-align-center p-0 fs-4.5">
                        <li class="my-3 options-machine" id="atribute-machine1" value="${character.strenght}">Strenght</li>
                        <li class="my-3 options-machine" id="atribute-machine2" value="${character.strenght}">Wisdom</li>
                        <li class="my-3 options-machine" id="atribute-machine3" value="${character.strenght}">Magic</li>
                    </ul>
                </div>
        </div>
        `

        return machineCharacterCard
    }

}