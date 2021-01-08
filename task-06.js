function sumInput() {
    let numbers = [];
    while (true) {
        let input = prompt("Введите число");
        if (input === "" || input === null || !isFinite(input)) break;
        numbers.push(Number(input))
    }
    let total = 0;
    for (let number of numbers) {
        total += number;
      }
      return total;
}

alert("Общая сумма чисел равна " + sumInput() );

// Не понимаю как сделать задание через цикл for и как вывести сообщение, если пользователь ввел не число


