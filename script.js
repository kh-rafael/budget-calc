//для простоты кол-во дней и бюджет забиты изначально
const days=10, budget=10000;
const spendingLimitElement = document.getElementById('spendingLimit'); // ссылка на h1 остатка
const inputSpent = document.getElementById("inputSpent"); // ссылка на инпут ввода трат

//пока рендер только для h1
function renderSpendingLimit(spentValue) {
        spendingLimitElement.innerHTML = spentValue + "₽ на сегодня";
    };

//Расчёт лимита
function spendingLimitCalculation (spentValue) {
    return spendingLimit = {
        today: (budget/days)-spentValue,
        tomorrow: (budget-this.today)/days,
    };
};

//Расчёт и рендер при каждом отжатии клавиши
function refresh() {
    let spendingLimit = spendingLimitCalculation(inputSpent.value).today;
    renderSpendingLimit(spendingLimit);
}

//Отлавливание нажатия
inputSpent.addEventListener("keyup", refresh);