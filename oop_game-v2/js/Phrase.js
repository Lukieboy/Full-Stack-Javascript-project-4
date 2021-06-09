/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
const ul = document.querySelector('#phrase ul');


class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){

        for(let i = 0; i < this.phrase.length; i++){
            const splitPhrase = this.phrase.split('');
            const ul = document.querySelector('#phrase ul');

            if(this.phrase[i] !== ' '){
                ul.innerHTML += `<li class="hide letter ${splitPhrase[i]}">${splitPhrase[i]}</li>`;
            }else{
                ul.innerHTML += `<li class="space"> </li>`;
            }
        }
    }
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter){
        return this.phrase.toLowerCase().includes(letter);
    }

    showMatchedLetter(letter) {
        const phraseLetters = document.querySelectorAll('#phrase ul li');
        const gamePhrase = game.activePhrase.phrase;
        for(let i = 0; i < phraseLetters.length; i++){
            if(phraseLetters[i].textContent == letter){
                phraseLetters[i].className = `letter show ${letter}`;
                console.log(phraseLetters[i])
            }
        }
        
    }

}





// const game = new Phrase("hello ahello");
// game.addPhraseToDisplay();


// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);