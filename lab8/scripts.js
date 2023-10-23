
function calculator() {
    const me = prompt("Enter your name", "Имя");
    const lover = prompt("Enter your lover name", "Имя");
    const result = Math.random() * 100
    alert(`${me} подходит к ${lover} на ${result}%`)
}

function bmiCalculator() {
    const weight = prompt("Enter your weight", "Вес");
    const height = prompt("Enter your height", "Рост") ^ 2;
    const result = parseInt(weight) / parseInt(height);

    if (result <= 18.5) {
        alert("Недостаточный вес");
    } else if (result <= 25) {
        alert("Нормально");
    } else if (result <= 30) {
        alert("У вас излишек веса");
    } else {
        alert("Ожирение");
    }
}

function year() {
    let year = prompt("Year"); // входные данные
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        alert("Високосный год"); // выходные данные
    } else {
        alert("Не является високосным"); // выходные данные
    }
}

function food() {
    let names = ['Дима', 'Катя', 'Петр', 'Лена']; // входные данные
    let randomIndex = Math.floor(Math.random() * names.length);
    let personPaying = names[randomIndex];
    alert("Оплачивать будет " + personPaying);
}
