import { Character } from "../components/character.js";

export class Wizard extends Character {
    strenght
    wisdom
    magic
    static class = 'Wizard'

    constructor(name, strenght, wisdom, magic) {
        super(name)
        this.strenght = strenght
        this.wisdom = wisdom
        this.magic = magic
    }
}

