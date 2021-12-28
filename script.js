'use strict';

//Algorítimo principal (variáveis e funções)
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let contador, scores, jogador, contador2;

resetGame();
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);
btnNew.addEventListener('click', resetGame);

//Mudar jogador
function mudarJogador() {
    if (jogador === 0)
        jogador = 1;
    else
        jogador = 0;
    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
}

//Roll the dice
function rollDice() {
    if (contador2 !== -1) {
        let dice = Math.trunc(Math.random() *6) +1;
        document.querySelector('.dice').classList.remove('hidden');
        document.querySelector('.dice').src = `dice-${dice}.png`;

        if (dice != 1) {
            contador += dice;
            document.querySelector(`#current--${jogador}`).textContent = contador;
        } else {
            contador = 0;
            document.querySelector(`#current--${jogador}`).textContent = contador;
            mudarJogador();
        }
    }
}

//Hold the dice
function holdDice() {
    if (contador2 !== -1) {
        scores[jogador] += contador;
        document.querySelector(`#score--${jogador}`).textContent = scores[jogador];
        contador = 0;
        if (scores[jogador] >= 100) {
            contador2 = -1
            document.querySelector(`.player--${jogador}`).classList.add('player--winner');
        }
        mudarJogador();
    }
}

//Reset game
function resetGame() {
    contador = 0;
    contador2 = 0;
    scores = [0, 0];
    jogador = 0;
    document.querySelector('.dice').classList.add('hidden');
    document.querySelector(`#current--0`).textContent = contador;
    document.querySelector(`#current--1`).textContent = contador;
    document.querySelector(`#score--0`).textContent = scores[jogador];
    document.querySelector(`#score--1`).textContent = scores[jogador];
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
}
