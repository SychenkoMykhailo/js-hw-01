let input = prompt("Введите минуты")
if (input != Number(input)){
	alert("Вы ввели не число")
} else {
	let hours = input / 60;
	let hoursleft = Math.floor(hours);
	let minutesleft = (hours - hoursleft) * 0.6 *100;
	alert(`${hoursleft} часов ${minutesleft} минут`)
}