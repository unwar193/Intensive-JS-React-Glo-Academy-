'use strict';

const appData = {
    title : "",
    screens : "",
    screenPrice : 0,
    rollback : 25,
    adaptive: true,
    service1 : "",
    service2 : "",
    allServicePrices : 0,
    fullPrice : 0,
    servicePercentPrice : 0,

    isNumber : function (num) {
    return !isNaN(parseFloat(num)) && isFinite(parseFloat(num))
    },

    asking : function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");

        do {appData.screenPrice = Number(prompt('Сколько будет стоить данная работа?'));}        
        while (!appData.isNumber(appData.screenPrice));
        

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
   
    },

    getAllServicePrices : function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0 ) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            appData.service2= prompt('Какой дополнительный тип услуги нужен?');
        }

        do {sum += Number(prompt('Сколько это будет стоить?'));}
        while (!appData.isNumber(sum));
    }
    return sum
    },

    getFullPrice: function () {
    return +appData.allServicePrices + +appData.screenPrice
    }, 

    getServicePercentPrices : function () {
    let rollbackMoney = appData.rollback / 100;
    let rollbackMoney2 = appData.fullPrice * rollbackMoney;

    return  appData.fullPrice - rollbackMoney2
    },

    getTitle : function () {
    let trimmedTitle = appData.title.trim();
    if (trimmedTitle.length === 0) {
        return trimmedTitle;
    }
    let lowerCaseTitle = trimmedTitle.toLowerCase();
    let result = lowerCaseTitle[0].toUpperCase() + lowerCaseTitle.slice(1);
    return result;
    },

    getRollbackMessage : function() {
        if (appData.fullPrice >= 30000) {
            return 'Даем скидку в 10%'
        } else if (appData.fullPrice < 0 ) {
            return 'Что-то пошло не так!'
        } else if (appData.fullPrice <= 15000) {
            return 'Скидка не предусмотрена'
        } else if (appData.fullPrice <= 30000) {
            return 'Даем скидку в 5%'
        }
    },

}




    
appData.asking();
appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.servicePercentPrice = appData.getServicePercentPrices();
appData.title = appData.getTitle();


console.log(appData.fullPrice); 
console.log(appData.servicePercentPrice);



