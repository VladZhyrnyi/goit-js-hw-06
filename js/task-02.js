const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listItemsRefsArray = ingredients.map(ingridient => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('item');
  listItemRef.textContent = ingridient;
  return listItemRef;
})

document.querySelector('#ingredients').append(...listItemsRefsArray);
