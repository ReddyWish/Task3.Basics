let question1 = confirm('JavaScript появился в 1995 году?');
if (question1 === true) {
    alert('Верно')
} else {
    alert('Вообще-то в 1995, ай-яй!')
}

let question2 = confirm('Спецификация JavaScript называется ECMAScript?')
if (question2 === true) {
    alert('Верно!')
} else {
    alert('Правильный ответ  ECMAScript')
}

let question3 = confirm('JavaScript был создан за 1 месяц?')
if (question3 === false) {
    alert('Верно!')
} else {
    alert('Ошибочка! JS вообще за 10 дней создали!')
}
