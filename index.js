const items = document.querySelector('.items');

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  const answer = document.querySelector('#item').value
  const list = document.createElement('li');
  const butt = document.createElement('button')
  butt.textContent = 'Remove'
  list.textContent = answer + " ";
  items.appendChild(list);
  list.appendChild(butt)
  butt.addEventListener('click', () => {
    items.removeChild(list)
  })
})