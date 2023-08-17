import { numberGenerator } from "./number-generator.js";
import changeTheme from "./change-theme.js";

let submitButton = document.querySelector('.submit');
let input = document.querySelector('.player-number');
let newGameButton = document.querySelector('.new-game');
let result = document.querySelector('.guess-result');
let computerNumber = numberGenerator();
let modeButton = document.querySelector('.mode');

newGameButton.addEventListener('click', newGame);
modeButton.addEventListener(`click`, changeTheme);

function newGame(e) {
    location.reload()
}
submitButton.addEventListener('click', submitNumber);
console.log(computerNumber)

function submitNumber(e) {
    let resultLi = document.createElement('li');
    let guess = input.value.split('').map(Number);
    let numberLength = guess.length;
    let bulls = 0;
    let cows = 0;

    if (numberLength != 4) {
        resultLi.textContent = 'Not a valid guess';
        result.prepend(resultLi);
        input.value = '';
        return;
    }
    let isNotSame = true;
    for (let i = 0; i < numberLength; i++) {
        let currentNumber = Number(guess[i]);

        for (let j = i + 1; j < numberLength; j++) {
            let nextNumber = Number(guess[j]);
            if (currentNumber == nextNumber) {
                isNotSame = false;
                resultLi.textContent = 'Not a valid guess';
                result.prepend(resultLi);
                input.value = '';
            }
        }
    }
    if (isNotSame) {
        for (let i = 0; i < numberLength; i++) {
            if (isNaN(guess[i])) {
                isNotSame = false;
                resultLi.textContent = `Not a valid guess`;
                result.prepend(resultLi);
                input.value = ``;
                return;
            }
            if (computerNumber[i] == guess[i]) {
                bulls++;
            } else if (guess.includes(computerNumber[i])) {
                cows++;
            }
        }
        resultLi.textContent = `${input.value}: ${bulls} Bulls / ${cows}  Cows`;
        result.prepend(resultLi);
        input.value = ``;
    }
    if (bulls == 4) {
        resultLi.textContent = `Congratz! You have guessed the number: ${computerNumber}`;
        result.prepend(resultLi);
        input.value = ``;
        e.target.parentElement.removeChild(submitButton)

    }
}



