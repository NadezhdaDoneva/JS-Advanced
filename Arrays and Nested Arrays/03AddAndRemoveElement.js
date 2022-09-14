function solve(input) {
    let arr = []
    let num=0
    for (let i = 0; i < input.length; i++) {
        let curCommand = input[i]
        num++
        switch (curCommand) {
            case 'add':
                arr.push(num)
                break;
            case 'remove':
                arr.pop()
                break;
        }
        
    }
    if(arr.length==0){
        console.log('Empty');
    } else{
    for (const el of arr) {
        console.log(el);
    }
}
}
solve(['add', 'add', 'remove', 'add', 'add'])