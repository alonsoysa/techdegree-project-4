/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const list = [...this.phrase].map((letter) => {
            return `<li class="hide letter ${letter}">${letter}</li>`;
        });
        ul.innerHTML = list.join('');
    };
}