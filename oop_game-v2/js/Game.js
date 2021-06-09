/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.querySelector('#overlay');

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    
    createPhrases() {
        const phrases = [
           new Phrase('hello world'), 
           new Phrase('coding is fun'),
           new Phrase('Good morning'),
           new Phrase('how are you'),
           new Phrase('What is your name')
       ]
       return phrases;
    }


    getRandomPhrase(){
        const randomNumber = Math.floor( Math.random() * this.phrases.length-1) + 1;
        return this.phrases[randomNumber];
    }

    startGame(){
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay;
        const phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    }


/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        let lettersNotFound = document.querySelectorAll('li.hide.letter');
        console.log(lettersNotFound);
        if(lettersNotFound.length == 0){
            return true;
        }else{
            return false;                   
        }
    };

    /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        this.missed += 1;
        let lifeList = document.querySelectorAll('.tries');
        console.log(lifeList);
        let indexNumber = this.missed - 1;
        lifeList[indexNumber].style.display = "none";
        if(this.missed == 5){
            this.gameOver();
        }
    };
        
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        let gameOverMessage = document.querySelector('#game-over-message');
        if(this.missed < 5){
            gameOverMessage.innerHTML = "YOU WIN!!!!";
            overlay.style.display = "inline";
            overlay.className = "win";
        }else{
            gameOverMessage.innerHTML = "Oh no! You Lost";
            overlay.style.display = "inline";
            overlay.className = "lose";
        }
};


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
handleInteraction(button) {
        button.disabled = true;

        console.log(this.activePhrase);
        // const splitActivePhrase = this.activePhrase.phrase.split('');
        // console.log(splitActivePhrase);


        if(this.activePhrase.phrase.includes(`${button.textContent}`)){
            button.classList += ' chosen';
            const phrase = new Phrase(this.activePhrase.phrase);
            phrase.showMatchedLetter(button.textContent);
            if(this.checkForWin()){
                this.gameOver(true);
            }
            
        }else{
            button.classList += ' wrong';
            this.removeLife();
        }


        /*FOR TO REMOVE SPACES*/ 
        // for(let i = 0; i < splitActivePhrase.length; i++){
        //     if(splitActivePhrase[i] == ' '){
        //         splitActivePhrase.splice(i, 1);
        //     }
        // }

    };
}


