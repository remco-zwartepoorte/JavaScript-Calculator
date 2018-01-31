const btn13 = document.querySelector('.btn13');
const result = document.querySelector('.result');

function addOne() {
  result.innerHTML = '1';
  console.log('addOne');
}

btn13.addEventListener('click', addOne);
