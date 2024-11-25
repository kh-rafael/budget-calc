//для простоты кол-во дней и бюджет забиты изначально
let days=10, budget=10000;
let spendingLimitElement = document.getElementById('spendingLimit'); // ссылка на h1 остатка
let inputSpent = document.getElementById("inputSpent"); // ссылка на инпут ввода трат
let SpendingLimitValueToday, SpendingLimitValueTomorrow; // переменные лимита на сегодня и лимита на завтра

//пока рендер только для h1
const render = {
    spendingLimit(){
        spendingLimitElement.innerHTML =SpendingLimitValueToday + "₽ на сегодня";
    },
};

//Расчёт лимита
const spendingLimit = {
    calc(SpentValue){
        SpendingLimitValueToday = (budget/days)-SpentValue;
        SpendingLimitValueTomorrow = (budget-SpendingLimitValueToday)/days;
    },
};

//Расчёт и рендер при каждом отжатии клавиши
function refresh() {
    spendingLimit.calc(inputSpent.value);
    render.spendingLimit();
}

//Отлавливание нажатия
inputSpent.addEventListener("keyup", refresh);