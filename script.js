'use strict';

let title;
let screens;
let screenPrice;
let rollback = 25;
let adaptive;

let service1;
let service2;
let allServicePrices; 
let fullPrice;
let servicePercentPrice;

const showTypeOf = function (variable){
    console.log(variable, typeof variable);
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(parseFloat(num))
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
    screenPrice = prompt('Сколько будет стоить данная работа?');
        while (!isNumber(screenPrice)) {
            screenPrice = prompt('Сколько будет стоить данная работа?')
        }
    adaptive = confirm('Нужен ли адаптив на сайте?');


    return title,  screens, screenPrice, adaptive
}

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0 ) {
            let service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            let service2= prompt('Какой дополнительный тип услуги нужен?');
        }

        sum += +prompt('Сколько это будет стоить?')
    }
    return sum
    // return extraServ1 + extraServ2
}

function getFullPrice(a, b){
    return a + b
}

const getServicePercentPrices = function(fullPrice, rollback){
    return fullPrice - (fullPrice * (rollback/100))
}

function getTitle(title) {
    let trimmedTitle = title.trim();
    if (trimmedTitle.length === 0) {
        return trimmedTitle;
    }
    let lowerCaseTitle = trimmedTitle.toLowerCase();
    let result = lowerCaseTitle[0].toUpperCase() + lowerCaseTitle.slice(1);
    return result;
}

const getRollbackMessage = function() {
        if (fullPrice >= 30000) {
            return 'Даем скидку в 10%'
        } else if (fullPrice < 0 ) {
            return 'Что-то пошло не так!'
        } else if (fullPrice <= 15000) {
            return 'Скидка не предусмотрена'
        } else if (fullPrice <= 30000) {
            return 'Даем скидку в 5%'
        }
}

    
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


/*Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль*/
console.log("Массив screens: " + screens.toLowerCase().split(", ")); 
console.log("Итоговая стоимость за вычетом доли посредника:" + servicePercentPrice + " рублей"); 


console.log(getRollbackMessage());
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log(title,  screens, screenPrice, adaptive)