function solve(input, op1, op2, op3, op4, op5) {
    let num = Number(input)
    let arrOfCommands = [op1,op2,op3,op4,op5]
    for (let i = 0; i < arrOfCommands.length; i++) {
        let operation = arrOfCommands[i]
        switch (operation) {
            case 'chop':
                num = num/2
                break;
        
            case 'dice':
                num = Math.sqrt(num)
                break;

                case 'spice':
                num++
                break;

                case 'bake':
                num*=3
                break;

                case 'fillet':
                num = 80/100*num
                break;
        }
        console.log(num);
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake',

'fillet')