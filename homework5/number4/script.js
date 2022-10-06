const arr = [4, 5, 8, 9, 2, 36, 42, 73, 21, 100]

function result () {
    for (let i = 0; i < arr.length; i++)
    if ((arr[i] % 2) === 0) {
        console.log(arr[i]);
    }
}
result()
