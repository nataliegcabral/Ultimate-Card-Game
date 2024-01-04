import { CharacterView } from "./components/character-view.js";
import { MachineCharacterView } from "./components/machine-character-view.js";
import { Wizard } from "./modules/wizard.js";
import { Warrior } from "./modules/warrior.js";
import { Hunter } from "./modules/hunter.js";
import { Summoner } from "./modules/summoner.js";
import { Druid } from "./modules/druid.js";


const wizardNicolas = new Wizard('Nicolas', 6, 8, 14)
const wizardNatalie = new Wizard('Natalie', 8, 18, 6)
const warriorShuq = new Warrior('Shuq', 14, 4, 1)
const hunterFejao = new Hunter('Fejao', 8, 10, 4)
const warriorHirabobo = new Warrior('Hirabobo', 12, 4, 9)
const summonerNicole = new Summoner('Nicole', 7, 10, 13)
const summonerCromo = new Summoner('Cromo', 8, 7.5, 15)
const hunterShimizu =  new Hunter('Shimizu', 10, 6, 2)
const druidGuima = new Druid('Guima', 5, 15, 16)

//duda, max, kazuo, guima

const characters = [wizardNatalie, wizardNicolas, hunterFejao, warriorShuq, warriorHirabobo, summonerNicole, summonerCromo, hunterShimizu, druidGuima]

let draw = document.querySelector('#draw')

draw.addEventListener('click', function() {

    let randomCardPlayer = characters[parseInt(Math.random() * characters.length)]
    let randomCardMachine = characters[parseInt(Math.random() * characters.length)]        

    while(randomCardMachine === randomCardPlayer) {
        return randomCardPlayer
    }

        new CharacterView(characters).render(randomCardPlayer)
        new MachineCharacterView(characters).render(randomCardMachine)           


    document.querySelector('#draw').disabled = true
    
});
