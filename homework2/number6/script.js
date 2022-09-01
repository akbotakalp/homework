let usd = prompt('Введите сумму')
let currency = prompt('Введите валюту: EUR, UAH, AZN')


if (currency === 'eur') {
    alert((+usd * 1.01).toFixed(2))
}
else if (currency === 'uah') {
    alert((+usd * 37.25).toFixed(2))
}
else if (currency === 'azn') {
    alert((+usd * 1.70).toFixed(2))
}
else {
    alert('invalid currency')
}