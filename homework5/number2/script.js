function a() {
let arr = [4, 3, 2, 8, 1];
let sum = 0
for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
}
console.log(sum);
let res = sum / arr.length
console.log(res);
}
a();
