//lesson01 
// Создание переменных
let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

//Вывод модального окна командой alert
//alert ("Hello Glo Academy!");
//Вывод лога в консоль командой console.log
//console.log("title ",title ,"screens ", screens,"screenPrice ", screenPrice, "rollback ", rollback, "fullPrice ", fullPrice,"adaptive ", adaptive);

//lesson02
//Присваиваем значения переменным:
title = "glo project";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 100;
rollback = 25;
fullPrice = 1500;
adaptive = true;

/* Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;*/
console.log("Тип переменной title: " + typeof(title),"Тип переменной fullPrice: " + typeof(fullPrice), "Тип переменной adaptive: " + typeof(adaptive));
/*Вывести в консоль длину строки из переменной screens*/
console.log("Длина строки переменной screens: " + screens.length);
/*Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”*/
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
/*Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль*/
console.log("Массив screens: " + screens.toLowerCase().split(", ")); 
/*Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))*/
console.log("Процент отката посреднику за работу " + fullPrice * (rollback/100) + " долларов"); 