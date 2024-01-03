import { Character } from "../components/character.js";

export class Summoner extends Character {
    strenght
    wisdom
    magic
    static class = 'Summoner'

    constructor(name, strenght, wisdom, magic) {
        super(name)
        this.strenght = strenght
        this.wisdom = wisdom
        this.magic = magic
    }
}