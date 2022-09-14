function solve(arr, num) {
    let lastElIdx = arr.length-1
    for (let i = 0; i < num; i++) {        
        let lastEL = arr[lastElIdx]
        arr.pop()
        arr.splice(0,0, lastEL)
    }
    console.log(arr.join(' '));
}
solve(['1',

'2',

'3',

'4'],

2)