let a = +prompt()
let b = +prompt()
function getPerfect(a, b) {
    let result = [];
    for (let i = a; i < b; i++) {
      sum = 0;
      for (let n = 1; n <= i/2; n++) {
        if (i % n === 0) sum += n;
      }
      if (i === sum) result.push(i);
    }
    return result;
  }
   
console.log(getPerfect(a, b));
