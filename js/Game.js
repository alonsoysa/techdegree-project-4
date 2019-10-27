/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }


    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game.
     */
    createPhrases() {
        return [
            // { phrase: 'You can do whatever you put your mind to' },
            { phrase: 'Adventure is out there' },
            { phrase: 'Reach for the sky' },
            { phrase: 'To infinity and beyond' },
            // { phrase: 'The rest of the world may follow the rules, but I must follow my heart' }
        ];
    }


    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        // get a random number between 0 to the size of the phrases array
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }


    /**
    * Logic for gameplay
    */
    handleInteraction() {

    }


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const phrase = document.querySelectorAll('.letter.hide:not(.disabled)');
        return !phrase.length ? true : false;
    };


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++;

        const hearts = document.querySelectorAll('#scoreboard img[src="images/liveHeart.png"]');
        console.log(hearts);
        const lastHeart = hearts.length - 1;
        console.log(lastHeart);
        const selectedHeart = hearts[lastHeart];

        selectedHeart.setAttribute('src', 'images/lostHeart.png');

        if ( this.missed === 5 ) {
            this.gameOver(false);
        }
    };


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const message = document.querySelector('#game-over-message');

        if (gameWon) {
            message.textContent = 'Win';
        } else {
            message.textContent = 'Lose';
        }

        overlay.style.display = 'block';
    };


    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.querySelector('#overlay');
        const phrase = new Phrase(this.getRandomPhrase().phrase);

        // hide overlay
        overlay.style.display = 'none';

        // add phrase to screen
        phrase.addPhraseToDisplay();

        // set as the active phrase
        this.activePhrase = phrase;
    };
}