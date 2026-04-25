"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 25,
  adaptive: true,
  services: [],
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(parseFloat(num));
  },

  isString: function (x) {
    return typeof x === "string" && x.trim().length > 0 && !/^\d+$/.test(x.trim());
  },

  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки",
      );
    } while (!appData.isString(appData.title));

    do {
      appData.screenPrice = Number(
        prompt("Сколько будет стоить данная работа?"),
      );
    } while (!appData.isNumber(appData.screenPrice));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt(
          "Какие типы экранов нужно разработать?",
          "Простые, Сложные, Интерактивные",
        );
      } while (!appData.isString(appData.title));

      do {
        price += Number(prompt("Сколько это будет стоить?"));
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!appData.isString(name));

      do {
        price += Number(prompt("Сколько это будет стоить?"));
      } while (!appData.isNumber(price));

      appData.services.push({ id: i, name: name, price: price });
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let allServicePrices of appData.services) {
      appData.allServicePrices += +allServicePrices.price;
    }

    appData.screenPrice = appData.screens.reduce((sum, el) => sum + el.price, 0);
  },

  getFullPrice: function () {
    appData.fullPrice = +appData.allServicePrices + +appData.screenPrice;
  },

  getServicePercentPrices: function () {
    let rollbackMoney = appData.rollback / 100;
    let rollbackMoney2 = appData.fullPrice * rollbackMoney;

    appData.servicePercentPrice = appData.fullPrice - rollbackMoney2;
  },

  getTitle: function () {
    let trimmedTitle = appData.title.trim();
    if (trimmedTitle.length === 0) {
      return trimmedTitle;
    }
    let lowerCaseTitle = trimmedTitle.toLowerCase();
    let result = lowerCaseTitle[0].toUpperCase() + lowerCaseTitle.slice(1);
    appData.title = result;
  },

  getRollbackMessage: function () {
    if (appData.fullPrice >= 30000) {
      return "Даем скидку в 10%";
    } else if (appData.fullPrice < 0) {
      return "Что-то пошло не так!";
    } else if (appData.fullPrice <= 15000) {
      return "Скидка не предусмотрена";
    } else if (appData.fullPrice <= 30000) {
      return "Даем скидку в 5%";
    }
  },

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  },
};

appData.start();