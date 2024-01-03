import { Character } from "../components/character.js";

export class Warrior extends Character {
    strenght
    wisdom
    magic
    static class = 'Warrior'

    constructor(name, strenght, wisdom, magic) {
        super(name)
        this.strenght = strenght
        this.wisdom = wisdom
        this.magic = magic
    }
}