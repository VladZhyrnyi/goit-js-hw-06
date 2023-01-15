/*

Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на 
button.change-color і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

*/


const currentColorRef = document.querySelector('.color');

const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", onChangeColorBtnClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onChangeColorBtnClick(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  currentColorRef.textContent = newColor;
};
