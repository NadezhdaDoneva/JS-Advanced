function solve(arr) {
    let sortedArr = arr.sort()
    for (let i = 1; i <= sortedArr.length; i++) {
        console.log(`${i}.${sortedArr[i-1]}`);
        
    }
}
solve(["John",

"Bob",

"Christina",

"Ema"])