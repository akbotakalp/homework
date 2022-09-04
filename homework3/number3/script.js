let num = prompt()
let res = ''
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    res += i + ','
  }
}
console.log(res);
