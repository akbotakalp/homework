let age = prompt('сколько вам лет?')

if (+age < 12) {
    alert('вы ребенок')
}
else if (+age <= 18) {
    alert('вы подросток')
}
else if (+age <= 60) {
    alert('вы взрослый')
}
else if (+age > 60) {
    alert('вы пенсионер')
}