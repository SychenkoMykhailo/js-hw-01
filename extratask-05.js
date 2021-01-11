while(true){
	let num1 = prompt("Введите первое число")
		if (num1 != Number(num1)){
			alert("Вы ввели не число!")
			break;
	};
	let num2 = prompt("Введите второе число")
		if (num2 != Number(num2)){
			alert("Вы ввели не число!")
			break;
	};
	let num3 = prompt("Введите третье число")
		if (num3 != Number(num3)){
			alert("Вы ввели не число!")
			break;
	};
	if (num1 >= num2 && num1 >= num3){
		alert(`Число ${num1} - самое большое`)
	}
	else if(num2 >= num1 && num2 >= num3){
		alert(`Число ${num2} - самое большое`)
	} 
	else if(num3 >= num2 && num3 >= num1){
		alert(`Число ${num3} - самое большое`)
	}
	break;
}




