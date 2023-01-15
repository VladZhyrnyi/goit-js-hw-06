/*

Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє 
його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

 - Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті 
data-length.
 - Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
якщо неправильна кількість - червоним.
 - Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже 
додали у вихідні файли завдання.

*/

const inputRef = document.querySelector("#validation-input");

function checkInput(event) {
  const element = event.currentTarget;

  if (!element.value) {
    element.classList.remove("valid", "invalid");

  } else if (Number.parseInt(element.dataset.length) === element.value.length) {
    element.classList.remove("invalid");
    element.classList.add("valid");
    
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
  };
};

inputRef.addEventListener("blur", checkInput);
