/*

Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в 
input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, 
колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

1. Створи функцію createBoxes(amount), яка приймає один параметр - число. 
    - Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
    - Розміри найпершого <div> - 30px на 30px.
    - Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
    - Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


2. Cтвори функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls').children;

console.log(controls);

const boxesRef = document.querySelector('#boxes');

controls[1].addEventListener('click', createBoxes);
controls[2].addEventListener('click', destroyBoxes)



function createBoxes() {
  destroyBoxes();

  const boxes = [];
  for (let i=0; i<controls[0].value; i++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxes.push(divEl);
  }
  boxesRef.append(...boxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}