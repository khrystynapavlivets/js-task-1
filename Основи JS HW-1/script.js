//Task 1
/*
 Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
Створіть змінну city.
Присвойте їй значення «Київ».
Змініть значення змінної city на «Львів».
Створіть змінну address і скопіюйте в неї значення змінної city.
Вивести значення змінної address з допомогою команди alert().
 */
let city = 'Київ';
console.log(city);
city = 'Львів'
console.log(city);


let address = city;
console.log(address);


alert(address);



//Task 2
/* Потрібно створити змінну n і записати в неї будь-яке число. Створити іншу змінну result, в яку потрібно записати результат n в степені 3.
 Результат вивести командою console.log().*/


var n = 2;
let result = 4 ** 3;
console.log(result);



//Task 2
/* Потрібно написати програму, яка обчислить вартість покупки. Людина купила 4 ручки по 5.25 грн і 6 олівців по 3.50 грн.
 Командами JavaScript потрібно обрахувати загальну вартість і вивести результат в document.write (для вартостей і кількостей товарів постворювати окремі змінні).*/
let numberPencil = 6;
let numberPen = 4;
let praceperPencil = 6.50;
let praceperPen = 5.25;
let a = numberPencil * praceperPencil;
let b = numberPen * praceperPen;
let S = a + b;
document.write('Загальна кількість - '+S+'');



