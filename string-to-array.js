const name = "intocode bootcamp";

const nameLetters = name.split(''); 
console.log(nameLetters); /*<- допиши эту строку, чтобы в значении был
                           массив из букв переменной name*/

const words = name.split(' '); 
console.log(words); /*<- допиши эту строку, чтобы в значении был
                  массив из слов "intocode"  и "bootcamp".*/

// ⚠️ Нельзя напрямую писать эти значения, они должны определяться
//   с помощью соответствующих методов.

console.log(name[16]);// выведи в консоль последнюю букву переменной name.

console.log(name.slice(-8));// выведи в консоль второе слово переменной name

words.push('Hello');
console.log(words)// добавь в конец массива words любое слово

nameLetters.push('t', 'h', 'e', ' ');
console.log(nameLetters);/// добавь в начало массива nameLetters четыре новых
// элемента 't', 'h', 'e' и ' '. Последний элемент это пробел.
