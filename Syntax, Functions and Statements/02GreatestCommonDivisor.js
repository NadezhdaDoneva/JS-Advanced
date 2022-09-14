function solve(first, second) {
    let gcd =0
    if (first>second) {
        for (let index = 1; index <= second; index++) {
            if(first%index==0 && second%index==0){
                gcd=index
            }           
        }
    }
    else{
        for (let index = 1; index <= first; index++) {
            if(first%index==0 && second%index==0){
                gcd=index
            }           
        }
    }
    console.log(gcd);
}
solve(15, 5)