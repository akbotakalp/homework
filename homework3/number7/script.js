let count = prompt('Введите число','2'),
    arr = '123456'.split``;
 
for(let i = 0; i < +count; i++) arr.push(arr.shift());
alert(arr.join``);