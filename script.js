'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = Number(prompt('Сколько будет стоить данная работа?', "12000"));
let rollback = 25;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = Number(prompt('Какой дополнительный тип услуги нужен?'));
let servicePrice1 = Number(prompt('Сколько это будет стоить?'));
let service2 = Number(prompt('Какой дополнительный тип услуги нужен?'));
let servicePrice2 = Number(prompt('Сколько это будет стоить?'));

let allServicePrices; 
let fullPrice;
let servicePercentPrice;

const showTypeOf = function (variable){
    console.log(variable, typeof variable);
}

const getAllServicePrices = function(extraServ1, extraServ2){
    return extraServ1 + extraServ2
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(a, b){
    return a + b
}

fullPrice = getFullPrice(screenPrice, allServicePrices);

const getServicePercentPrices = function(fullPrice, rollback){
    return fullPrice - (fullPrice * (rollback/100))
}

servicePercentPrice = getServicePercentPrices(fullPrice, rollback);


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

    


/*Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль*/
console.log("Массив screens: " + screens.toLowerCase().split(", ")); 
console.log("Итоговая стоимость за вычетом доли посредника:" + servicePercentPrice + " рублей"); 


console.log(getRollbackMessage());
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)
