let message = prompt("В какую страну хотите оформить доставку?");
let message1 = message.charAt(0).toUpperCase();
let message2 = message1 += message.slice(1).toLowerCase();
switch (message2) {
    case "Китай":
    alert ("Доставка в Китай будет стоить 150 кредитов");
    break;
    case "Чили":
    alert ("Доставка в Чили будет стоить 250 кредитов");
    break;
    case "Австралия":
    alert ("Доставка в Австралию будет стоить 165 кредитов");
    break;
    case "Индия":
    alert ("Доставка в Индию будет стоить 90 кредитов");
    break;
    case "Ямайка":
    alert ("Доставка в Ямайку будет стоить 130 кредитов");
    break;
    default:
    alert ("В вашей стране доставка недоступна");
}

