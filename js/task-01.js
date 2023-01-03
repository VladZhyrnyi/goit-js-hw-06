/* 

    HTML містить список категорій ul#categories.

 <ul id="categories">
   <li class="item">
     <h2>Animals</h2>
     <ul>
       <li>Cat</li>
       <li>Hamster</li>
       <li>Horse</li>
       <li>Parrot</li>
     </ul>
   </li>
   <li class="item">
     <h2>Products</h2>
     <ul>
       <li>Bread</li>
       <li>Prasley</li>
       <li>Cheese</li>
     </ul>
   </li>
   <li class="item">
     <h2>Technologies</h2>
     <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li>JavaScript</li>
       <li>React</li>
       <li>Node.js</li>
     </ul>
   </li>
 </ul>


 Напиши скрипт, який:
  - Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
  - Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку 
 елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього). 
 
 */

const categoriesRef = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesRef.children.length}`);

for(let child of categoriesRef.children) {
  console.log(`Category: ${child.children[0].textContent}`);
  console.log(`Elements: ${child.children[1].children.length}`);
}
