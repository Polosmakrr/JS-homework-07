const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector(`#ingredients`);

const elements = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;

  console.log(liEl);
  return liEl;
})

listRef.append(...elements);





