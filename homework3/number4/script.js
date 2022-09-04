let num = prompt()
let quantity = 0

for (let i = num; i >= 1; i /= 10) {
    quantity += 1
    i = Math.round(i)
} 
console.log(quantity);