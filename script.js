"use strict";

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0]; //Кнопка "Рассчитать" 
const resetBtn = document.getElementsByClassName('handler_btn')[1]; //Кнопка "Сброс"

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];


let screens = document.querySelectorAll('.screen');


//console.log(fullTotalCount);
// console.log(title);
// console.log(buttonStart);
// console.log(buttonReset);
// console.log(buttonPlus);
// console.log(elementsClassPercent);
// console.log(elementsClassNumber);
// console.log(rangeInput);
// console.log(spanRangeValue);
// console.log(screenBlocks);

// const totalInputs = document.getElementsByClassName('total-input');
// for (let element of totalInputs) {
//     console.log(element);
// };

//раздел 

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 25,
  adaptive: true,
  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,

  init: function () {
    appData.addTitle()

    startBtn.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);


  },

  addTitle: function () {
    document.title =  title.textContent;
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addScreens: function () {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function (screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      appData.screens.push({ 
        id: index, 
        name: selectName, 
        price: +select.value * +input.value 
      });
    })
   },

  addServices: function () {

    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const label = item.querySelector('label')
      const input = item.querySelector('input[type=text]')
      
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
   },

  addPrices: function () {
    
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    };

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    };

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent += +appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

     appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    // appData.screenPrice = appData.screens.reduce((sum, el) => sum + el.price, 0);
  },

  getServicePercentPrices: function () {
    let rollbackMoney = appData.rollback / 100;
    let rollbackMoney2 = appData.fullPrice * rollbackMoney;

    appData.servicePercentPrice = appData.fullPrice - rollbackMoney2;
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
    alert('Старт')
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    // appData.getServicePercentPrices();
    // appData.logger();
    console.log(appData)
    appData.showResult();
  },

  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  },
};

appData.init();




  // isNumber: function (num) {
  //   return !isNaN(parseFloat(num)) && isFinite(parseFloat(num));
  // },

  // isString: function (x) {
  //   return typeof x === "string" && x.trim().length > 0 && !/^\d+$/.test(x.trim());
  // },