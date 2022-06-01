const modal = document.querySelector('#modal');
const modalOutside = document.querySelector('#modalOutside');
const modalOpenButton = document.querySelector('#modalOpenButton');
const modalCloseButton = document.querySelector('#modalCloseButton');
const counterSpan = document.querySelector('#counter');
const counterResetButton = document.querySelector('#counterResetButton');

let counter = parseInt(window.localStorage.getItem('counter')) || 0;

const updateCounter = () => {
  window.localStorage.setItem('counter', counter);
  counterSpan.textContent = `${counter} times`;

  if (counter > 5) counterResetButton.classList.remove('modal--hidden');
  else counterResetButton.classList.add('modal--hidden');
};

const handleOpenModal = () => {
  counter += 1;
  modal.classList.remove('modal--hidden');
  updateCounter();
};

const handleCloseModal = () => {
  modal.classList.add('modal--hidden');
};

const handleResetCounter = () => {
  counter = 0;
  updateCounter();
};

modalOpenButton.addEventListener('click', handleOpenModal);
modalCloseButton.addEventListener('click', handleCloseModal);
modalOutside.addEventListener('click', handleCloseModal);
counterResetButton.addEventListener('click', handleResetCounter);

updateCounter();
