function solve(input){
    let juices = new Map();
    let producedBottles = new Map();

    input.forEach(el => {
        let [juiceType, quantity] = el.split(' => ');
        quantity += quantity;

        if(!juices.has(juiceType)){
            juices.set(juiceType,0);
        }
        juices.set(juiceType, juices.get(juiceType) + quantity);

    if(juices.get(juiceType)>=1000){
        producedBottles.set(juiceType, Math.floor(juices.get(juiceType)/1000));

    }
});
producedBottles.forEach((q,n)=>console.log(`${n} => ${q}`));
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])
