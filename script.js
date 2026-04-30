let booksList  = document.querySelectorAll('.book');
let books = document.querySelectorAll('ul > li');
let body = document.querySelector('body');
let adv = document.querySelectorAll('.adv');


booksList[0].before(booksList[1]);
booksList[5].after(booksList[2]);
booksList[4].after(booksList[3]);

body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
booksList[4].querySelector('a').innerHTML = `Книга 3. this и <b>Прототипы</b> Объектов`;

adv[0].remove();

books[3].after(books[6]);
books[9].after(books[2]);
books[6].after(books[8]);
books[49].before(books[55]);
books[50].after(books[48]);
books[53].after(books[51]);

let cloneNode = books[25].cloneNode(true);
cloneNode.innerHTML = 'Глава 8: За пределами ES6';
books[25].after(cloneNode);

console.dir(cloneNode);
console.dir(books);

