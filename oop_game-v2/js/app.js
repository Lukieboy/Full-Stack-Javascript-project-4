// /* Treehouse FSJS Techdegree
//  * Project 4 - OOP Game App
//  * app.js */

let game;
const startGameBtn = document.querySelector('#btn__reset');
const phraseUl = document.querySelector('#phrase ul');
let keys = document.querySelectorAll('.key');
let tries = document.querySelectorAll('.tries');

startGameBtn.addEventListener('click', ()=>{
    phraseUl.innerHTML = "";

    for (let index = 0; index < keys.length; index++) {
        keys[index].classList= "key";
        keys[index].disabled = false;
    }

    for (let index = 0; index < tries.length; index++) {
        tries[index].style.display = "";
    }


    game = new Game;
    game.startGame();
})



for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener('click', ()=>{
        let keyLetter = keys[index];
        game.handleInteraction(keyLetter);
    });  
}
