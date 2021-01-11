let input = prompt("Введите вашу оценку")
if (input != Number(input)){
	alert("Вы ввели не число!")
} else if (input >= 89 && input <= 100){
	alert(`Ваша оценка: ${input} - А`)
} else if (input >= 75 && input < 89){
	alert(`Ваша оценка: ${input} - B`)
} else if (input >= 60 && input < 75){
	alert(`Ваша оценка: ${input} - C`)
} else if (input >= 45 && input < 60){
	alert(`Ваша оценка: ${input} - D`)
} else if (input >= 20 && input < 45){
	alert(`Ваша оценка: ${input} - E`)
} else if (input >= 0 && input < 20){
	alert(`Ваша оценка: ${input} - F`)
} else {
	alert("Введённое значение должно быть от 0 до 100")
} 
