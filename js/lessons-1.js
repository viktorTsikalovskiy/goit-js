// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// let priceTv = Number(prompt("Ввндіть ціну за телевізор."));
// let pricePhone = +prompt("Ввндіть ціну за телефон.");
// let priceRadio = +prompt("Ввндіть ціну за радіо.");

// console.log(priceTv + pricePhone + priceRadio);
// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// let question = +prompt("СКІЛЬКИ МІСЯЦІВ МАЄ РІК?");
// if (question === 12) {
//   console.log("Вірно");
// } else {
//   console.log("НЕ ЗНАЄТЕ? 12");
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const number = Number(prompt("Введіть число"));

// if (number % 2 === 0) {
//   console.log("Число парне");
// } else {
//   console.log("Число не парне");
// }

// const numberOne = number % 2 === 0 ? "Число парне" : "Число не парне";
// console.log(numberOne);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt("Якого місяця ви народилися?"));

// if (month === 12 || month === 1 || month === 2) {
//   console.log("Зима");
// } else if (month >= 3 && month <= 5) {
//   console.log("Весна");
// } else if (month >= 6 && month <= 8) {
//   console.log("Літо");
// } else if (month >= 9 && month <= 11) {
//   console.log("Осінь");
// } else {
//   console.log("Ви ввели некоректне значення");
// }

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ  SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const user = prompt("Період підписки на сервіс")
// switch (user) {
//   case "День":
//     console.log("Ціна 1.99");
//     break;
//   case "Неділя":
//     console.log("Ціна 5.99");
//     break;
//   case "Місяць":
//     console.log("Ціна 10.99");
//     break;
//   case "Рік":
//     console.log("Ціна 100.99");
//     break;
//   default: console.log("error");
// }

// ЗАДАЧА 9
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// let min = 3;
// let max = 56;

// for (let i = min; i <= max; i++) {
//   console.log(i);
// }
// for (let i = min; i <= max; i++) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }
// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.splice(1, 1, "Классика");
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Регги");
console.log(styles);
