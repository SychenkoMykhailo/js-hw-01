let number_1 = prompt("Введите первое число")
if (number_1 != Number(number_1)){
	alert("Вы ввели не число!");
} else {
	let number_2 = prompt("Введите второе число")
	if (number_2 != Number(number_2)) {
		alert("Вы ввели не число!")
	} else {
		let symbol = prompt("Введите необходимый символ операции + , - , * , / ")
		if (symbol !== "+" && symbol !== "-" && symbol !== "*" && symbol !== "/") {
			alert("Вы ввели не тот символ")
		} else {
			switch(symbol){
				case "+": alert(`Сумма чисел ${number_1} и ${number_2} = ${number_1*1 + number_2*1}`);
				break;
				case "-": alert(`Разница чисел ${number_1} и ${number_2} = ${number_1*1 - number_2*1}`);
				break;
				case "*": alert(`Умножение чисел ${number_1} и ${number_2} = ${number_1*1 * number_2*1}`);
				break;
				case "/": alert(`Деление чисел ${number_1} и ${number_2} = ${number_1*1 / number_2*1}`);
				break;
			}
		}
	}
} 