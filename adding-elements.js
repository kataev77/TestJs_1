const arr = [];
arr.push(32);
console.log(arr[0]);


const arr_1 = [];
arr_1.push(
    'aaa',
    'hello',
    'world'
);
console.log(arr_1);


const arr_2 = [true, false];
arr_2.push(
    null
);
console.log(arr_2);


const arr_3 = [[], []];
arr_3[0].push(
    true,
    true,
    true
);
console.log(arr_3);


const arr_4 = ['html', 'css'];
arr_4.unshift('git');
arr_4.push('javascript');
arr_4[4] = 'figma';
console.log(arr_4);



let stack = ["html", "css", "bem", "js"];
stack.push('react');
console.log(stack);
stack[5] = 'redux';
stack.unshift('git');
console.log(stack);
console.log(`Сначала мы изучим ${stack[0]}, а в конце изучим ${stack[6]}`);
stack.push('mysql','mongodb');
console.log(stack.length)

// A) добавь в конец массива значение "react" (используй .push())

// B) выведи весь массив в консоль

// C) добавь в конец массива значение "redux" (используй способ с [])

// D) выведи весь массив в консоль

// E) добавь в начало массива значение "git"

// F) выведи весь массив в консоль

/*
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux".
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */

// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".

// I) выведи в консоль длину массива

