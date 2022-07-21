const $ = selector => document.querySelector(selector);

// const arrowLeft = () => {
//   $('.hero').classList.toggle('hero-left');
// };

// const arrowRight = () => {
//   $('.hero').classList.toggle('hero-right');
// };

const heroMove = x_pos => {
  $('.hero').style.position = 'absolute';
  $('.hero').style.left = x_pos + 'px';
  console.log(x_pos);
};

const checkKey = e => {
  const hero = $('.hero').getBoundingClientRect();
  const left = parseInt(hero.left, 10);
  console.log(hero);
  console.log(hero.left);

  switch (e.key) {
    case 'ArrowLeft':
      heroMove(left - 10);
      break;

    case 'ArrowRight':
      heroMove(left + 10);
      break;
  }
};

const gameStart = () => {};

// $('.start-button').addEventListener('click', gameStart);
window.addEventListener('keyup', checkKey);
// window.addEventListener('keyup', );
