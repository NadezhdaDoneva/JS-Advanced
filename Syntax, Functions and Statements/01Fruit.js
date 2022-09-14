function solve(fruit, grams, moneyPerKg) {
    let moneyNeeded = grams/1000*moneyPerKg
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)