function solve(arr, n) {
    let newARr = []
    for (let i = 0; i < arr.length; i++) {
        if(i%n==0){
            newARr.push(arr[i])
        }
    }
    return newARr
}
solve(['5',

'20',

'31',

'4',

'20'],

2)