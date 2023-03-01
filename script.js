const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const answer = document.querySelector('.answer');

const add = function (a, b) {
  return a + b;
};
const minus = function (a, b) {
  return a - b;
};
const divide = function (a, b) {
  return a / b;
};
const times = function (a, b) {
  return a * b;
};

let state1 = true;
let val1 = 0;
let val2 = 0;
let operator;
let result;

numberBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    // console.log(e.target.textContent);
    if (state1) {
      val1 += e.target.textContent;
      answer.textContent = val1.slice(1);
      console.log(val1);
    } else {
      val2 += e.target.textContent;
      answer.textContent = val2.slice(1);
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    state1 = !state1;

    if (e.target.textContent === '+') {
      answer.textContent = e.target.textContent;
      operator = add;
    } else if (e.target.textContent === '-') {
      answer.textContent = e.target.textContent;
      operator = minus;
    } else if (e.target.textContent === 'x') {
      answer.textContent = e.target.textContent;
      operator = times;
    } else if (e.target.textContent === '/') {
      answer.textContent = e.target.textContent;
      operator = divide;
    } else {
      result = operator(+val1, +val2);

      if (result % 1 === 0) {
        answer.textContent = result;
      } else {
        answer.textContent = result.toFixed(3);
      }
      val1 = 0;
      val2 = 0;
    }
  });
});
