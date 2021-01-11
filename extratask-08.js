// Бумага<Ножницы<Камень  3<1<2
// Ножницы<Камень<Бумага  1<2<3
// Камень<Бумага<Ножницы  2<3<1
let input = prompt("Введите ваш выбор: Камень, Ножницы или Бумага")
let input1 = input.charAt(0).toUpperCase();
let input2 = input1 += input.slice(1).toLowerCase();
let input3 = 0;
function userchf() {
	if (input2 != "Камень" && input2 != "Ножницы" && input2 != "Бумага") {
		alert("Введено не одно из значений");
	} else if (input2 == "Ножницы") {
		input3 = 1;
	} else if (input2 == "Камень") {
		input3 = 2;
	} else if (input2 == "Бумага") {
		input3 = 3;
	}
	return input3;
}
let userch1 = userchf();
let compch1 = Math.floor(Math.random() * 3) + 1;
function result (userch = userch1, compch = compch1) {
	if (userch == compch) {
		return (`Ничья! Компьютер тоже выбрал ${input2}`);
	} else if(userch == 1) {
		if (compch == 2) {
			return ("Вы проиграли :( Компьютер выбрал Камень") 
		} else {
			return ("Вы выиграли! :) Компьютер выбрал Бумагу")
		}
	} else if (userch == 2) {
		if (compch == 3) {
			return ("Вы проиграли :( Компьютер выбрал Бумагу")
		} else {
			return ("Вы выиграли! :) Компьютер выбрал Ножницы")
		}
	} else if (userch == 3) {
		if (compch == 1) {
			return ("Вы проиграли :( Компьютер выбрал Ножницы")
		} else {
			return ("Вы выиграли! :) Компьютер выбрал Камень")
		}
	}
}
let res = result();
alert(res)

