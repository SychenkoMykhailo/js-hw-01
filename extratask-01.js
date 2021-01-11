let birthyear = prompt("Введите год рождения");
if (Number.isInteger(+birthyear/4)) {
    alert("Ваш год рождения - высокосный")
} else if (birthyear != Number(birthyear)) {
    alert("Некорректный ввод")
} else {
    alert("Ваш год рождения - не высокосный")
}