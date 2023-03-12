const progressBar = document.getElementById('progress-bar');
const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const circles = document.getElementsByClassName('circle');

let PROGRESS_VALUE = 0;
let TO_INDEX = 0;

buttonPrev.addEventListener('click', () => {
   PROGRESS_VALUE -= 33;
   TO_INDEX--;
   progressBar.setAttribute('value', `${PROGRESS_VALUE}`);
   setDisable();
   deactivateCircle();
});

buttonNext.addEventListener('click', () => {
   PROGRESS_VALUE += 33;
   TO_INDEX++;
   progressBar.setAttribute('value', `${PROGRESS_VALUE}`);
   setDisable();
   activateCircle();
});

function activateCircle () {
   [...circles].forEach((circle, index) => {
      if(index <= TO_INDEX) circle.classList.add('active');
   });
}

function deactivateCircle() {
   [...circles].forEach((circle, index) => {
      if(index > TO_INDEX) circle.classList.remove('active');
   });
}

function setDisable () {
   if (PROGRESS_VALUE === 0) buttonPrev.setAttribute('disabled', 'true');
   else buttonPrev.removeAttribute('disabled');
   if (PROGRESS_VALUE === 99) buttonNext.setAttribute('disabled', 'true');
   else buttonNext.removeAttribute('disabled');
}