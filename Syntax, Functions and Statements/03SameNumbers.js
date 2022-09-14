function solve(num) {
    let numToStr = num.toString()
    let isSame = true
    let sum =0
    let digitToCompare = numToStr[0]

    for (let index = 0; index < numToStr.length; index++) {
        let currentNum = Number(numToStr[index]) 
        sum+=currentNum
        if(currentNum!=digitToCompare){
            isSame=false
        }
        
    }
    console.log(isSame);
    console.log(sum);
}
solve(1234)