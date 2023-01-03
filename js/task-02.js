const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/* 

HTML містить порожній список ul#ingredients.

<ul id="ingredients"></ul>

JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

*/

const listItemsRefsArray = ingredients.map(ingridient => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('item');
  listItemRef.textContent = ingridient;
  return listItemRef;
})

document.querySelector('#ingredients').append(...listItemsRefsArray);
