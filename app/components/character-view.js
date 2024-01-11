export class CharacterView {
    character

    constructor (characters) {
        this.cardContainer = document.querySelector('.card-container')
        this.characters = characters
    }

    render(randomCardPlayer) {
        this.cardContainer.innerHTML = ''
            const characterCard = this.playerCharacter(randomCardPlayer)
            this.cardContainer.appendChild(characterCard)
    }

    playerCharacter(character) {
        const characterCard = document.createElement('div')
        characterCard.classList.add('card-frame', character.class)

        characterCard.innerHTML = `
        <h2 class="fw-bold">Player</h2>
        <div class="card m-4" style="width: 18rem;">
            <img src="assets/img/background.jpg" class="card-img-top" alt="...">
                <div class="card-body fs-6">
                    <h5 class="card-title">${character.constructor.class} ${character.name}</h5>
                    <input class="my-3" type="radio" name="options-player" id="atributo-player1" value="${character.strenght}">Strenght: ${character.strenght}<br>
                    <input class="my-3" type="radio" name="options-player" id="atributo-player2" value="${character.wisdom}">Wisdom: ${character.wisdom}<br>
                    <input class="my-3" type="radio" name="options-player" id="atributo-player3" value="${character.magic}">Magic: ${character.magic}
                </div>
        </div>
        `

        return characterCard

        
        
    }
    
    

}

