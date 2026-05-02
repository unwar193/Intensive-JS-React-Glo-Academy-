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

const allInputText = document.getElementsByClassName("all-inputs");
const allSelect = document.getElementsByTagName("select");

let screens = document.querySelectorAll('.screen');



const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  count: {},
  countScreens: 0,
  rollback: 0,
  adaptive: true,
  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  isError: false,

  init: function () {
    appData.addTitle()
    appData.addEnable();
    startBtn.addEventListener('click', appData.start);
    resetBtn.addEventListener("click", appData.reset);

    buttonPlus.addEventListener('click', appData.addScreenBlock);
    inputRange.addEventListener("input", appData.addInputRange);

  },

  addTitle: function () {
    document.title =  title.textContent;
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.countScreens;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;
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

      if (select.selectedIndex === 0) {
        alert("Выберите хотя бы один тип экрана ");
        appData.isError = true;
      } else if (input.value === "") {
        alert("Укажите количество экранов");
        appData.isError = true;
      } else {
        appData.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
        });

      appData.count[selectName] = +input.value;
      }

    })

    return !appData.isError;
  },

  addInputRange: function () {
    inputRangeValue.textContent = inputRange.value + "%";
    appData.rollback = inputRange.value;
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
    };

    for (let key in appData.count) {
      appData.countScreens += appData.count[key];
    }

    appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
     // appData.screenPrice = appData.screens.reduce((sum, el) => sum + el.price, 0);
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    appData.addDisabled();

    appData.showResult();
  },

  reset: function () {
  appData.addEnable();

  total.value = total.defaultValue;
  totalCount.value = totalCount.defaultValue;
  totalCountOther.value = totalCountOther.defaultValue;
  fullTotalCount.value = fullTotalCount.defaultValue;
  totalCountRollback.value = totalCountRollback.defaultValue;

  appData.title = "";
  appData.screens = [];
  appData.screenPrice = 0;
  appData.adaptive = true;
  appData.rollback = 0;
  appData.count = {};
  appData.countScreens = 0;
  appData.servicesPercent = {};
  appData.servicesNumber = {};
  appData.servicePricesPercent = 0;
  appData.servicePricesNumber = 0;
  appData.fullPrice = 0;
  appData.servicePercentPrice = 0;

  screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    let select = screen.querySelector("select");
    select.selectedIndex = "0";
  });

  for (var i = 1; i < screens.length; i++) {
    screens[i].remove();
  }

    let serviceDefaultPrice = document.querySelectorAll(
      ".main-controls__input"
    );
    serviceDefaultPrice.forEach((screen) => {
      let input = screen.querySelector("input");
      input.value = input.defaultValue;
    });

    let serviceUncheck = document.querySelectorAll(".custom-checkbox");
    serviceUncheck.forEach((box) => (box.checked = false));

    inputRangeValue.textContent = inputRange.defaultValue + "%";
    inputRange.value = "0";
  },

  addEnable: function () {
    [].forEach.call(allInputText, (e) => {
      e.removeAttribute("disabled");
    });
    [].forEach.call(allSelect, (e) => {
      e.removeAttribute("disabled");
    });

    startBtn.style.display = "initial";
    resetBtn.style.display = "none";
  },

  addDisabled: function () {
    [].forEach.call(allInputText, (e) => {
      e.disabled = true;
    });
    [].forEach.call(allSelect, (e) => {
      e.disabled = true;
    });

    screens.disabled = true;
    startBtn.style.display = "none";
    resetBtn.style.display = "initial";
  },

  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  },
};

appData.init();


/*
  // isNumber: function (num) {
  //   return !isNaN(parseFloat(num)) && isFinite(parseFloat(num));
  // },

  // isString: function (x) {
  //   return typeof x === "string" && x.trim().length > 0 && !/^\d+$/.test(x.trim());
  // },
*/