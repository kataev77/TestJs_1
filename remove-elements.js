let characters = ["Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];

 const firstElement = characters[0];
 console.log(firstElement);

 const lastElement = characters[5];
 console.log(lastElement);

 characters.shift();
 console.log(characters);

 characters.push(firstElement);
 console.log(characters);

 characters.unshift('Король ночи');
 console.log(characters);

 delete characters[5];
 console.log(characters);

 characters.unshift(lastElement);
 console.log(characters);