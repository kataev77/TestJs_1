let letters = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p'];

letters.push('t');// добавь в конец массива letters символ 't' (не напрямую, а с помощью метода).
console.log(letters.join(''))// затем выведи в консоль этот массив в виде целого слова.

console.log(letters.join('-'))// выведи тот же массив в консоль, но между каждым символом должен стоять тире.
// т.е. в консоле будет вот так: j-a-v-a-s-c-r-i-p-t

const words = ['html', 'css'];

console.log(words.join());// выведи в браузер строку 'html & css' <- (точно в точь как в примере)

words.push('git');// добавь в массив words еще один элемент "git" 
console.log(words.join('-'));// и выведи в консоль строку "html-css-git".