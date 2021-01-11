let randomnum = Math.floor(Math.random() * 10) + 1;
let usernum = prompt("Угадайте число от 1 до 10");
if (usernum == randomnum) {
	alert(`Поздравляем! Вы угадали число ${usernum}!`)
} else if (usernum != Number(usernum)) {
	alert("Некорректный ввод")
} else if (usernum != randomnum) {
	alert(`Вы проиграли, компьютер загадал число ${randomnum}`)
}