const questions = [
    "Вам нравится программирование?",
    "Артем лох?",
    "Точно?"
];

const scores = [1, 2, 3];

let totalScore = 0;

for (let i = 0; i < questions.length; i++)
    {
    let answer = prompt(questions[i] + " (Да/Нет)").trim().toLowerCase();

    while (answer !== "да" && answer !== "нет") {
        answer = prompt("Введите только 'Да' или 'Нет'").trim().toLowerCase();
    }

    if (answer === "да") {
        totalScore += scores[i];
    }
}

alert("Тест завершён! Ваш результат: " + totalScore);


const forbidden = "!@#$%^&*()+=[]{};:'\"\\|/<>?,~`";
let fio = prompt("Введите ФИО:");

function isValidFIO(text) {
    for (let char of text) 
    {
        if (forbidden.includes(char)) return false;
    }
    return true;
}

while (!isValidFIO(fio))
{
    fio = prompt("Ошибка! Введите ФИО заново (только буквы, точки и пробелы):");
}

alert("ФИО принято: " + fio);
