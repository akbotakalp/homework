let sum = +prompt('Введите сумму')

if (sum <= 300) {
    alert('скидка 3%')
}
else if (sum <= 500) {
    alert('скидка 5%')
}
else if (sum > 500 ) {
    alert('скидка 7%')
}
else {
    alert('error')
}