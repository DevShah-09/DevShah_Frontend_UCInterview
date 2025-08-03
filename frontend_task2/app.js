const mini = 1;
const maxi = 100;
let random_num = Math.floor(Math.random() * (maxi - mini + 1)) + mini;

let max_hearts = 7;
let guesses = [];

const input = document.querySelector("#input");
const guess_btn = document.querySelector("#guess");
const hint = document.querySelector("#hint");
const display_guesses = document.querySelector("#display_guesses");
const reset = document.querySelector("#reset");
const hearts = document.querySelector("#hearts");

const remainingHearts = () => {
  hearts.innerHTML = '';
  for (let i = 0; i < max_hearts; i++) {
    hearts.innerHTML += '❤️';
  }
};

remainingHearts(); 

guess_btn.addEventListener('click', () => {
  const curr_guess = Number(input.value);
  guesses.push(curr_guess);
  display_guesses.innerText = guesses.join(', ');

  if (curr_guess === random_num) {
    hint.innerText = `Boom! ${random_num} is correct!`;
    GameOver();
  } else {
    max_hearts--;
    remainingHearts();

    hint.innerText = curr_guess > random_num ? 'Try guessing smaller' : 'Try guessing higher';

    if (max_hearts === 0) {
      hint.innerText = `Game Over! The number was ${random_num}`;
      GameOver();
    }

    input.value = '';
  }
});

const GameOver = () => {
  guess_btn.disabled = true;
  input.disabled = true;
};

reset.addEventListener('click',()=>{
  max_hearts=7;
  guesses=[];
  random_num = Math.floor(Math.random() * (maxi - mini + 1)) + mini;

  guess_btn.disabled=false;
  input.disabled=false;
  input.value = '';
  hint.innerText = '';
  display_guesses.innerText = '';
  remainingHearts();
});



