function solve(array) {
    let resultArr = []
    array = array.sort((a,b) => a-b)
    while (array.length!=0) {
        resultArr.push(array.shift())
        resultArr.push(array.pop())
    }
    return resultArr
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])