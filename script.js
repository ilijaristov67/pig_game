'use strict';

//Selecting elements for score
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');