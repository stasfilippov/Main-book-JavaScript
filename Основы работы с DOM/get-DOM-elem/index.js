'use strict'

let button = document.querySelector('#button');
let btnFirst = document.querySelector('#button1');
btnFirst.addEventListener('click', () => alert('1'))

let btnSecond = document.querySelector('#button2');
btnSecond.addEventListener('click', () => alert('2'))

let btnThird = document.querySelector('#button3');
btnThird.addEventListener('click', () => alert('3'))

console.log(button);

button.addEventListener('click', () => console.log('!!!'))
//Задание 1
//Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

let elem1 = document.querySelector('#elem1')
console.log(elem1);

let elem2 = document.querySelector('#elem2')
console.log(elem2);

let elem3 = document.querySelector('#elem3')
console.log(elem3);

let input = document.querySelector('#parent input')
console.log(input);

let elemInput = document.querySelector('.elem')
console.log(elemInput);

let parIdBlock = document.querySelector('#block p')
console.log(parIdBlock);

let parClassBlock = document.querySelector('.block p')
console.log(parClassBlock)

let wwwElem = document.querySelector('.www');
console.log(wwwElem)