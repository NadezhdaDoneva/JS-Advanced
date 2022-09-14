function solve(input) {
    let newArr = []
    let curDigit = input[0]
    newArr.push(curDigit)
    for (let i= 1; i< input.length; i++) {
        if (curDigit<=input[i]) {
            newArr.push(input[i])
        }
        curDigit=input[i]
    }
    return newArr;
}
solve([1,

    3,
    
    8,
    
    4,
    10, 12, 3, 2,24])