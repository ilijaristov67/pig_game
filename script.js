'use strict';

//Selecting elements for score
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

//Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//game-logic
let switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1  :  0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};


btnRoll.addEventListener('click', function(){
  if (playing) {
    let dice = Math.trunc(Math.random()* 6) +1;

    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;


    if(dice !== 1){
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function(){
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10){
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else{
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function(){
  playing = true;
  score0El.textContent = '0';
  score1El.textContent = '0';
  currentScore0.textContent = '0';
  currentScore1.textContent = '0';
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
});