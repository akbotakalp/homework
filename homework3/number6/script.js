do {

let a = +prompt('enter first number');
let b = +prompt('enter second number');
let sign = prompt('enter sign: - + * /');

switch (sign) {
    case '+':
        alert(a + b);
        break;
    case '-':
        alert(a - b);
        break;
    case '/':
        alert(a / b);
        break;
    case '*':
        alert(a * b);
    default:
        break;
}     
} while (confirm('Хотите ли вы решить еще один пример?'));


