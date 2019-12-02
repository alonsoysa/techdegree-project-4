/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Listener for starting a game
const btn_reset = document.querySelector('#btn__reset');
btn_reset.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Listener for when selecting a letter with a mouse
const keyboard = document.querySelector('#qwerty');
keyboard.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});

// Listener for when using keyboard to select a letter
document.addEventListener('keyup', (event) => {
    if (event.which >= 65 && event.which <= 90 ) {
        var letter = String.fromCharCode(event.which).toLocaleLowerCase();
        const buttons = document.querySelectorAll('#qwerty button');
        const button = [...buttons].filter(item => {
            return item.textContent === letter;
        });
        button[0].click();
    }
});