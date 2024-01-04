import { Character } from "../components/character.js";

export class Druid extends Character {
    strenght
    wisdom
    magic
    static class = 'Druid'

    constructor(name, strenght, wisdom, magic) {
        super(name)
        this.strenght = strenght
        this.wisdom = wisdom
        this.magic = magic
    }
}