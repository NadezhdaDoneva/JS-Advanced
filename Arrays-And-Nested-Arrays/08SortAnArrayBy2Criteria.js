function solve(arr) {
    arr.sort(twoCriteria)
    return arr.join('\n')
    function twoCriteria(current,next) {
    if(current.length===next.length){
        //implement 2nd criteria
        return current.localeCompare(next)
    }
    return current.length-next.length
    }
}

solve(['alpha',

'beta', 
'gamma'])