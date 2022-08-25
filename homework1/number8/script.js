let amount = prompt('Введите сумму')
let price = prompt('Введите цену шоколадки')
let answer = amount - price 
let answer2 = answer / price
let answer3 = answer % answer2
alert(('Сколько шоколадок вы можете купить:') + answer2 + ('  Остаток денег:') + answer3)