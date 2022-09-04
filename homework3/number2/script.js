let a = prompt()
let b = prompt()
let result = 0
for (let i=1; i<=Math.max(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
        result = i
    }
}
console.log(result);