let day = prompt('Введите день')
let month = prompt('Введите месяц')
let year = prompt('Введите год')

if (day <= 31) {
    day++
}
if (month <= 12) {
    month++ 
}
else if (month === '2') {
    day <= '28'
}
if (year <= 10000) {
    year++   
}
else if (year * 4) {
    if (month === '2') {
        day <= '29'
    }
}
alert(day + ':' + month + ':' + year)