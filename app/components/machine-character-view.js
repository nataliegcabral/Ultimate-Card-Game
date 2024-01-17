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
                    <h5 class="card-title text-center">${character.constructor.class} ${character.name}</h5>

                    <ul type="none" class="text-center fs-6 p-0">
                        <li class="options-machine" id="atribute-machine1" value="${character.strenght}">Strenght <span class="li-span" style="visibility: hidden">${(character.strenght)}</span></li>
                        <li class="options-machine" id="atribute-machine2" value="${character.wisdom}">Wisdom <span class="li-span" style="visibility: hidden">${character.wisdom}</span></li>
                        <li class="options-machine" id="atribute-machine3" value="${character.magic}">Magic <span class="li-span" style="visibility: hidden">${character.magic}</span></li>
                    </ul>
                </div>
        </div>
        `

        return machineCharacterCard
    }

}