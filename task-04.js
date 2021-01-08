const credits = 35500;
const pricePerDroid = 3000;
let message = prompt("Какое количество дроидов желаете купить?");
let totalPrice = message * pricePerDroid;
if (message == null) {
    alert("Отменено пользователем!")
} else if (message != Number(message)){
    alert("Некорректный ввод")
} else if (totalPrice >= credits) {
    alert("Недостаточно средств на счету!")
} else {
    alert("Вы купили " + message + " дроидов, на счету осталось " + `${credits - totalPrice}` + " кредитов.")
}