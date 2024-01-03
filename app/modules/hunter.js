import { Character } from "../components/character.js";

export class Hunter extends Character {
    strenght
    wisdom
    magic
    static class = 'Hunter'

    constructor(name, strenght, wisdom, magic) {
        super(name)
        this.strenght = strenght
        this.wisdom = wisdom
        this.magic = magic
    }
}