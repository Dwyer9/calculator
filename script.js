const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const answer = document.querySelector('.answer');
const clearBtns = document.querySelectorAll('.clear');
const deleteBtn = document.querySelector('.delete');

const add = function (a, b) {
  return a + b;
};
const minus = function (a, b) {
  return a - b;
};
const divide = function (a, b) {
  if (b === 0) {
    alert(`You can't divide by zero!`);
    return;
  }
  return a / b;
};
const times = function (a, b) {
  return a * b;
};

let state1 = true;
let val1 = '';
let val2 = '';
let operator;
let result;

numberBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent === '.' && state1 && val1.includes('.')) return;
    if (e.target.textContent === '.' && !state1 && val2.includes('.')) return;

    if (state1 && val1.length > 12) return;
    if (!state1 && val2.length > 12) return;
    // console.log(e.target.textContent);
    if (state1) {
      val1 += e.target.textContent;
      answer.textContent = val1;
    } else {
      val2 += e.target.textContent;
      answer.textContent = val2;
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (state1) {
      state1 = false;

      if (e.target.textContent === '+') {
        if (val1.length === 0) {
          val1 = result;
        }
        answer.textContent = e.target.textContent;
        operator = add;
      } else if (e.target.textContent === '-') {
        if (val1.length === 0) {
          val1 = result;
        }
        answer.textContent = e.target.textContent;
        operator = minus;
      } else if (e.target.textContent === 'x') {
        if (val1.length === 0) {
          val1 = result;
        }
        answer.textContent = e.target.textContent;
        operator = times;
      } else if (e.target.textContent === '/') {
        if (val1.length === 0) {
          val1 = result;
        }
        answer.textContent = e.target.textContent;
        operator = divide;
      } else {
        return;
      }
    } else {
      result = operator(+val1, +val2);

      if (result > 100000000) {
        result = result.toExponential(2);
        answer.textContent = result;
      } else if (result % 1 === 0) {
        answer.textContent = result;
      } else {
        answer.textContent = result.toFixed(3);
      }
      val1 = '';
      val2 = '';

      if (e.target.textContent === '=') {
        state1 = true;
      } else if (e.target.textContent === '-') {
        answer.textContent = e.target.textContent;
        operator = minus;
        val1 = result;
      } else if (e.target.textContent === 'x') {
        answer.textContent = e.target.textContent;
        operator = times;
        val1 = result;
      } else if (e.target.textContent === '/') {
        answer.textContent = e.target.textContent;
        operator = divide;
        val1 = result;
      } else {
        answer.textContent = e.target.textContent;
        operator = add;
        val1 = result;
      }
    }
  });
});

clearBtns.forEach((button) => {
  button.addEventListener('click', () => {
    val1 = '';
    val2 = '';
    answer.textContent = 0;
    state1 = true;
  });
});

deleteBtn.addEventListener('click', () => {
  if (state1) {
    val1 = val1.slice(0, -1);
    answer.textContent = val1;
  } else {
    val2 = val2.slice(0, -1);
    answer.textContent = val2;
  }
});

window.addEventListener('click', () => {
  console.table(val1, val2, state1, result);
});

window.addEventListener('keydown', (e) => console.log(typeof e.key));
