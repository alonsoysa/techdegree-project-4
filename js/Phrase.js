/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase ul');
        const list = [...this.phrase].map((letter) => {
            const letterClass = letter === ' ' ? 'disabled' : letter;
            return `<li class="hide letter ${letterClass}">${letter}</li>`;
        });
        ul.innerHTML = list.join('');
    };


    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let selectedLetter = document.querySelectorAll('.hide.letter.'+letter);
        
        console.log(selectedLetter);

        if (selectedLetter.length === 1) {
            selectedLetter = [...selectedLetter];
        }

        selectedLetter.forEach( item => {
            item.classList.remove('hide');
            item.classList.add('show');
        });
    };
    
}